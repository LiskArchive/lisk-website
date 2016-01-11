In this tutorial we show how easy it is to create a Crypti based Messaging dapp.

We've already created a basic dapp. So let's develop it further into something a little more useful, while at the same time explaining step by step how exactly it is done.

First open a command prompt and change directory to our previously generated **dapps** folder:

```sh
cd dapps/[dappid]/
```

Replace **[dappid]** with your dapp's own unique identifier. Then issue the following command to create new contract using **crypti-cli**:

```sh
crypti-cli contract -a
```

Crypti-cli will ask you few questions e.g. contract name, so let's choose the name "Message".

```sh
? Contract file name (without .js) Message
New contract created: ./contracts/Message.js
Updating contract list
Done
```

Great! We have created our first new contract. Inside you will find a **modules/contracts** folder. For the moment we are only interested in this folder.

Now open the **contracts** folder, and you will see our newly generated **Message.js** contract file:

```js
var private = {}, self = null,
    library = null, modules = null;

function Message(cb, _library) {
	self = this;
	self.type = 7;
	library = _library;
	cb(null, self);
}

Message.prototype.create = function (data, trs) {
	return trs;
}

Message.prototype.calculateFee = function (trs) {
	return 0;
}

Message.prototype.verify = function (trs, sender, cb, scope) {
	setImmediate(cb, null, trs);
}

Message.prototype.getBytes = function (trs) {
	return null;
}

Message.prototype.apply = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Message.prototype.undo = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Message.prototype.applyUnconfirmed = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Message.prototype.undoUnconfirmed = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Message.prototype.ready = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Message.prototype.save = function (trs, cb) {
	setImmediate(cb);
}

Message.prototype.dbRead = function (row) {
	return null;
}

Message.prototype.normalize = function (asset, cb) {
	setImmediate(cb);
}

Message.prototype.onBind = function (_modules) {
	modules = _modules;
	modules.logic.transaction.attachAssetType(self.type, self);
}

module.exports = Message;
```

If you look closely, you will see our contract inherits from `modules.logic.transaction`. Therefore, each contract behaves just like a normal transaction, but with the added ability to use custom data and execute its own set of logic.

Taking a second look at our **Message.js** contract, you will also see that we calculate the transaction fee, add new types of data, verify that data is correct and then verify that our data is ready to be applied to the blockchain.

This obviously gives us a lot of power and flexibility when it comes to creating our Messaging dapp.

Since we are developing a Messaging dapp, the primary purpose of our dapp will be to send messages from one user to another. We will need to:

  * Create new fields to store message data.
  * Create an API to send and receive messages.

## Transaction Creation

Let's begin by modifying the `create` function of our Message prototype to allow it to accept message data and save it as a hexadecimal encoded string:

```js
Message.prototype.create = function (data, trs) {
	// recipient
	trs.recipientId = data.recipientId;

	// Create transaction container
	trs.asset = {
		message: new Buffer(data.message, 'utf8').toString('hex') // Save message as hex string
	};

	return trs;
}
```

Next, we set a transaction fee for each time a user sends a message, for example, 1 XCR:

```js
Message.prototype.calculateFee = function (trs) {
	return 100000000;
}
```

Next, we set the maximum length of a message to 160 characters. As message data is stored in hexadecimal format, the maximum size of message is 320 characters (160*2). So let's modify the `verify` function to check if a message exceeds the maximum size:

```js
Message.prototype.verify = function (trs, sender, cb, scope) {
	// Check if message length is greater than 320 characters
	if (trs.asset.message.length > 320) {
		return setImmediate(cb, "Max length of message is 320 characters");
	}

	setImmediate(cb, null, trs);
}
```

Now we need to generate a valid signature for each transaction. Each message will be signed in bytes, so we will modify the `getBytes` function to return our message in bytes as follows:

```js
Message.prototype.getBytes = function (trs) {
	return new Buffer(trs.asset.message, 'hex');
}
```

JavaScript utilizes dynamic type-checking, so it is important that we verify our data is correct. The below `normalize` function demonstrates how we can use the `library.validator.validate` function to validate our data:

```js
Message.prototype.normalize = function (asset, cb) {
	// Call validator on our asset object
	library.validator.validate(asset, {
		type: "object", // It is an object
		properties: {
			message: { // It contains a message property
				type: "string", // It is a string
				format: "hex", // It is in a hexadecimal format
				minLength: 1 // Minimum length of string is 1 character
			}
		},
		required: ["message"] // Message property is required and must be defined
	}, cb);
}
```

Right now, we are still missing a few steps. These are: reading/saving to a database and the application of transaction fees.

First of all, let's create our database tables. All databases tables are defined within the file: **blockchain.json**, again located within the root folder of our dapp.

Below is an example of the SQL based schema used to define a database:

```json
{
	"table": "table_name",
	"alias": "table_alias",
	"type": "type of content",
	"tableFields": [
		{
			"name": "name of field",
			"type": "type of field",
			"length": "length of field"
		}
	]
}
```

Let's quickly describe each property:

  * **table** - The table name.
  * **alias** - A shortened table name alias (example: **b**, the first letter(s) of your table name).
  * **type** - The object type. Can be "table" or "index". In our case "table".
  * **tableFields** - An array of table fields.

Below is the schema we will use to define the database for our Messaging dapp:

```json
{
	"table": "asset_messages",
	"alias": "tm",
	"type": "table",
	"tableFields": [
		{
			"name": "message",
			"type": "String",
			"length": 320
		},
		{
			"name": "transactionId",
			"type": "String",
			"length": 21
		}
	]
}
```

As you can see, we've now created a table named **asset_messages**, set a **tm** alias for it, and created two fields:

  * **message** - Message field to store messages data as a hexadecimal encoded string.
  * **transactionId** - Required for all table fields. A unique identifier linking to each transaction.

Now we need to define a table join between **asset_messages** and **transactions** on our dapp's sidechain. In order to do this, find the **join** array within our **blockchain.json** file and add the following:

```json
{
	"type": "left outer",
	"table": "asset_messages",
	"alias": "tm",
	"on": {
  		"t.id": "tm.transactionId"
	}
}
```

Let's quickly describe each property:

  * **type** - The join type. In our case "left outer".
  * **table** - The join table.
  * **alias** - The table name alias.
  * **on** - The field on which to join each table.

Next, we need to save and read the data from our database:

```js
Message.prototype.save = function (trs, cb) {
	modules.api.sql.insert({
		table: "asset_messages",
		values: {
			transactionId: trs.id,
			message: trs.asset.message
		}
	}, cb);
}

Message.prototype.dbRead = function (row) {
	if (!row.tm_transactionId) {
		return null;
	} else {
		return {
			message: row.tm_message
		};
	}
}
```

Great! Our message contract now has the required functionality to insert new messages into the database and save them onto the blockchain.

Now, all we need to do is process transaction fees, and we will have successfully completed our first step.

## Transaction Fees

Within any blockchain, transactions exist in two states: **unconfirmed** and **confirmed**.

  * **unconfirmed** - When a transaction has been broadcast, but has not yet been included in a block.
  * **confirmed** - When a transaction has been broadcast, and has been included in a block, having one or more confirmations.

Account balances on the blockchain also have two corresponding properties: **unconfirmed balance** and **confirmed**.

Therefore to process transaction fees, we will define two functions: `apply/applyUnconfirmed`.

The `applyUnconfirmed` function applies the transaction fee to the **unconfirmed balance**, while the `apply` function applies it to the **confirmed** balance.

Finally, if a transaction is confirmed within a fork on the blockchain, the transaction needs to be rolled back and reapplied.

To handle this type of situation, we define two more functions, `undo` and `undoUnconfirmed`, as detailed below:

```js
Message.prototype.apply = function (trs, sender, cb, scope) {
	modules.blockchain.accounts.mergeAccountAndGet({
		address: sender.address,
		balance: -trs.fee
	}, cb);
}

Message.prototype.undo = function (trs, sender, cb, scope) {
	modules.blockchain.accounts.undoMerging({
		address: sender.address,
		balance: -trs.fee
	}, cb);
}

Message.prototype.applyUnconfirmed = function (trs, sender, cb, scope) {
	if (sender.u_balance < trs.fee) {
		return setImmediate(cb, "Sender doesn't have enough coins");
	}

	modules.blockchain.accounts.mergeAccountAndGet({
		address: sender.address,
		u_balance: -trs.fee
	}, cb);
}

Message.prototype.undoUnconfirmed = function (trs, sender, cb, scope) {
	modules.blockchain.accounts.undoMerging({
		address: sender.address,
		u_balance: -trs.fee
	}, cb);
}
```

As you can see, the most complicated thing we do here, is check the sender has enough coins before applying the unconfirmed transaction in `applyUnconfirmed`.

```js
if (sender.u_balance < trs.fee) {
	return setImmediate(cb, "Sender doesn't have enough coins");
}
```

Once this condition passes. We deduct the transaction fee from the sender's account balance using `modules.blockchain.accounts.mergeAccountAndGet`. Which accepts the sender's address and balance change as arguments.

The same applies to the `undo` functions, but we use the `modules.blockchain.accounts.undoMerging` function instead.

Congratulations! This completes our first step.

Now we need to add an **API** to drive our dapp, which will allow us to interact with it.

## API

First, let's add a few extra functions to our Message prototype.

```js
Message.prototype.add = function (cb, query) {
}

Message.prototype.list = function (cb, query) {
}
```

* **add** - This function is used to create new messages.
* **list** - This function is used to receive a list of messages for a given recipient.

Each API function accepts two arguments. The first argument is a callback function `cb`, and the second argument is a `query` object containing any request parameters.

Each `cb` callback function also accepts two arguments. The first argument is an Error object, and the second is the result of our API call.

Calling the `cb` function within an API call like so: `cb(error, result)` signifies the end of an API call.

Now let's add these new functions to our API routes.

Open the **routes.json** file located within the root folder of our dapp. Then add these lines to the start of the file.

```json
{
	"path": "/messages/add",
	"method": "put",
	"handler": "contracts.Message.add"
},
{
	"path": "/messages/list",
	"method": "get",
	"handler" : "contracts.Message.list"
},
```

With our API routes now defined, let's complete the `add` function of our prototype, which will accept the following query parameters:

  * **secret** - The password of the sender's account.
  * **recipientId** - The recipient's unique identifier.
  * **message** - The message string the sender wants to send.

Before we can apply a transaction to blockchain, we first need to validate these parameters. To do this, we use the `library.validator.validate` function as detailed below:

```js
Message.prototype.add = function (cb, query) {
	// Validate query object
	library.validator.validate(query, {
		type: "object",
		properties: {
			recipientId: {
				type: "string",
				minLength: 1,
				maxLength: 21
			},
			secret: {
				type: "string",
				minLength: 1,
				maxLength: 100
			},
			message: {
				type: "string",
				minLength: 1,
				maxLength: 160
			}
		}
	}, function (err) {
		// If error exists, execute callback with error as first argument
		if (err) {
			return cb(err[0].message);
		}
	});
}
```

After our validation passes, we need to generate a key pair. To do this, we use `modules.api.crypto.keypair`:

```js
var keypair = modules.api.crypto.keypair(query.secret);
```

Next, we need to get the sender's account:

```js
// Get account
modules.blockchain.accounts.getAccount({
		publicKey: keypair.publicKey.toString('hex')
	}, function (err, account) {
		// If error occurs, call cb with error argument
		if (err) {
			return cb(err);
		}
	});
```

And finally, let's create the transaction on the blockchain:

```js
// Create new transaction
try {
	var transaction = library.modules.logic.transaction.create({
		type: self.type,
		message: query.message,
		recipientId: query.recipientId,
		sender: account,
		keypair: keypair
	});
} catch (e) {
	// Catch error if something goes wrong
	return setImmediate(cb, e.toString());
}

// Send transaction for processing
modules.blockchain.transactions.processUnconfirmedTransaction(transaction, cb);
```

Great, now we need to fund our account using **crypti-cli** and then we can send an API request to send our first message!

```sh
crypti-cli dapps --deposit
```

It will ask for your dapps' secret, amount and unique identifier. Then just send the following API request to your dapp:

```sh
curl -XPUT -H "Content-type: application/json" -d '{
"recipientId": "58191895912485C",
"message": "Hello, world!",
"secret": "mysecret"
}' 'http://localhost:7040/api/dapps/[dappid]/api/messages/add'
```

Great, it's done! To list messages for a given recipient, let's make another API call using the `list` function:

```js
Message.prototype.list = function (cb, query) {
	// Verify query parameters
	library.validator.validate(query, {
		type: "object",
		properties: {
			recipientId: {
				type: "string",
				minLength: 2,
				maxLength: 21
			}
		},
		required: ["recipientId"]
	}, function (err) {
		if (err) {
			return cb(err[0].message);
		}

		// Select from transactions table and join messages from the asset_messages table
		modules.api.sql.select({
			table: "transactions",
			alias: "t",
			condition: {
				recipientId: query.recipientId,
				type: self.type
			},
			join: [{
				type: 'left outer',
				table: 'asset_messages',
				alias: "tm",
				on: {"t.id": "tm.transactionId"}
			}]
		}, ['id', 'type', 'senderId', 'senderPublicKey', 'recipientId', 'amount', 'fee', 'signature', 'blockId', 'transactionId', 'message'], function (err, transactions) {
			if (err) {
				return cb(err.toString());
			}

			// Map results to asset object
			var messages = transactions.map(function (tx) {
				tx.asset = {
					message: new Buffer(tx.message, 'hex').toString('utf8')
				};

				delete tx.message;
				return tx;
			});

			return cb(null, {
				messages: messages
			})
		});
	});
}
```

Here we run a SQL query to get a list of messages from the blockchain, using the recipient's publicKey and transaction type as conditions.

To get a list of messages, send the following API request to your dapp:

```sh
curl -XGET 'http://localhost:7040/api/dapps/[dappid]/api/messages/list?recipientId=58191895912485C'
```

Replacing **[dappid]** with your dapp's own unique identifier and **[recipientId]** with the recipient's address.

This completes the backend of our Messaging dapp. The source code for this tutorial is available [here](https://github.com/crypti/MessagingDApp).

In the [next tutorial](UserInterface.md), we describe how to create a frontend user interface for our Messaging dapp.
