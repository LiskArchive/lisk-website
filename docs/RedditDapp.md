# Creating a Reddit Dapp

In this tutorial, we give an overview on how to handle multiple contracts within a dapp and make relationships between them.

We will therefore make a decentalized version of "Reddit" as an example. It won't be a full rendition of "Reddit" itself, but rather, a small part of its functionality, containing a message board with posts, comments and likes.

Before proceeding, we strongly recommend reading our [Messaging Dapp Tutorial](/MessagingDapp.md), which gives a more thorough introduction on how contracts are put together.

## Contracts

So, let's begin by outlining the structure of our "Reddit" dapp, consisiting of three contracts, each representing a user action:

* **Post.js** - A contract for managing posts.
* **Comment.js** - A contract for managing comments.
* **Like.js** - A contact for managing likes.

In our implementation, users can post new messages to the board, make comments on posts, and also like posts. Each of these user actions: posting, commenting and liking, require the user to pay a nominal fee. With part of the fees going to the author of each post, and the other part going to the master nodes securing the dapp.

## Fees

The fee structure for each user action is as follows:

* **Post** - 0.1 lisk is paid to the master nodes.
* **Comment** - 0.01 lisk is paid to the master nodes.
* **Like** - 0.1 lisk is paid to the post's author, 0.0001 lisk is paid to the master nodes.

With the above fee structure, authors can earn lisk from each post they create, and likewise, master nodes can earn lisk from each occurrence of all three user actions: posting, commenting and liking.

## Post Contract

The Post contract is a simple contract allowing users to create posts for a 0.1 lisk fee (10000000). Each post consists of a title (of up to 100 characters) and the text of the post (with up to 5000 characters).

The source code for this contract can be found [here](https://github.com/LiskHQ/lisk-redditdapp/blob/master/modules/contracts/Post.js).

## Comment Contract

The Comment contract allows users to make comments against posts on the board. In this contract we need to define a one-to-many relationship between each parent post and its child comments.

All contracts on a Lisk sidechain are essentially a special type of transaction, with each transaction being assigned a primary key. This key is then used to uniquely identify instances of a contract on the sidechain, thus allowing relationships to be defined with other contracts.

Below we demonstrate how upon creating a comment, we assign it the parent **postId** and the **text** of the comment itself.

```js
Comment.prototype.create = function (data, trs) {
	trs.asset = {
		comment: {
			postId: data.postId,
			text: data.text
		}
	};

	return trs;
}
```

Then, we verify the comment contract by first checking the length of the text, and then subsequently, verifying that the assigned **postId** actually exists on the sidechain.

```js
Comment.prototype.verify = function (trs, sender, cb, scope) {
	if (trs.asset.comment.text.length == 0 || trs.asset.comment.text.length > 160) {
		return setImmediate(cb, "Text must contain from 0 to 160 letters, now there is " + trs.asset.comment.text.length + " letters");
	}

	modules.api.sql.select({
		table: "transactions",
		alias: "t",
		condition: {
			id: trs.asset.comment.postId,
			type: 6
		}
	}, function (err, rows) {
		if (err || rows.length == 0) {
			return cb(err || "Post didn't found");
		}

		return cb(null, trs);
	});
}
```

When checking the existence of our post, we are executing a SQL query against the transactions table of the sidechain. This verifies the post's existence and has just two conditions:

```js
condition: {
	id: trs.asset.comment.postId,
	type: 6
}
```

The first of which is the transaction id that our **postId** refers to. The second, is the transaction type, which in this case is 6. This is because the post contract which we are referring to is the sixth type of transaction that has been defined on the sidechain.

With the full implementation of this contract in place, we should now be able to an make an API call that will return comments for a given **postId**.

The complete source code for this contract can be found [here](https://github.com/LiskHQ/lisk-redditdapp/blob/master/modules/contracts/Comment.js).

## Like Contract

The Like contract allows users to "Like" a post and tip the author with a specified amount of lisk. As with the comments contract, this contract defines a one-to-many relationship between each parent post and its child likes. Additionally, upon liking a post, it specifies the amount of lisk to send to the author, as part of the like.

Below we demonstrate, how upon creating a like, we assign it the parent **postId**, the **recipientId** (the author), and the amount of 0.1 lisk to be sent to the author.

```js
Like.prototype.create = function (data, trs) {
	trs.amount = 10000000;
	trs.recipientId = data.recipientId;
	trs.asset = {
		like: {
			postId: data.postId
		}
	};

	return trs;
}
```

Then, we verify the like contract by first checking the transaction amount is correct, and then subsequently, verifying that the assigned **postId** actually exists on the sidechain.

```js
Like.prototype.verify = function (trs, sender, cb, scope) {
	if (trs.amount != 10000000){
		return cb("Incorrect amount of like");
	}

	modules.api.sql.select({
		table: "transactions",
		alias: "t",
		condition: {
			id: trs.asset.like.postId,
			type: 6
		}
	}, function (err, rows) {
		if (err || rows.length == 0) {
			return cb(err || "Post didn't found");
		}

		return cb(null, trs);
	});
}
```

Finally, we deduct the amount from the sender's (liker) account, and then add the same amount to the recipient's (author) account.

```js
Like.prototype.apply = function (trs, sender, cb, scope) {
	var amount = trs.amount + trs.fee;

	if (sender.balance < amount) {
		return setImmediate(cb, "Balance has no lisk: " + trs.id);
	}

	async.series([
		function (cb) {
			// Deduct amount from sender's (liker) account
			modules.blockchain.accounts.mergeAccountAndGet({
				address: sender.address,
				balance: -amount
			}, cb, scope);
		},
		function (cb) {
			// Add amount to recipient's (author) account
			modules.blockchain.accounts.mergeAccountAndGet({
				address: trs.recipientId,
				balance: trs.amount
			}, cb, scope);
		}
	], cb);
}
```

**NOTE:**

- The same logic, but instead affecting unconfirmed balances is defined as `applyUnconfirmed`.
- The reverse of the above function is defined as `undo` and `undoUnconfirmed`.

The complete source code for this contract can be found [here](https://github.com/LiskHQ/lisk-redditdapp/blob/master/modules/contracts/Like.js).

This completes our tutorial on how to handle multiple contracts within a dapp. The source code for this tutorial is available [here](https://github.com/LiskHQ/lisk-redditdapp).
