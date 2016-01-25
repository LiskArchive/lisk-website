# Creating a Basic Dapp

Moving on to our next tutorial, let's create our first dapp using **Lisk CLI**, an automated tool for bootstrapping Lisks based decentralized applications.

#### GitHub Repository

Before we start, we first need to create a repository to store our dapp's source code.

[Log into](https://github.com/login) your [GitHub](https://github.com/) account, and [create a new repository](https://help.github.com/articles/create-a-repo/) using a name of your choosing.

The repository can be **public** or **private**, depending on your preference.

#### Unique Genesis Block

Once we have created our GitHub repository, we can proceed to make a new unique genesis block, which we will use to test our dapp. To do so, open a command prompt then proceed with the following:

**NOTE:** Please ensure you are within the root folder of your testnet installation.

Listing the directory contents using the `ls` command, should yield:

```text
app.js  blockchain.db  build  config.json  dapps  genesisBlock.json  logs.log  nodejs  node_modules  package.json  public  sqlite
```

If not, then please change directory to it. For example, when using vagrant: `cd /vagrant/0.1.0`

Then enter the following command, to proceed with bootstrapping your dapp:

```text
lisk-cli dapps -a
```

This command will ask you a few important questions:

```text
? Existing blockchain.db file will be replaced, are you sure?
? Enter secret of your testnet account
? Update existing genesis block? (or create a new one)
? Enter DApp name
? Enter DApp description
? Enter Github clone url
? Enter public keys of dapp forgers - hex array, use ',' for separator
? Add DApp to autolaunch
```

Each question is further described below:

* **Existing blockchain.db file will be replaced, are you sure?**

Answering **yes** will replace the existing blockchain.db, the file in which your dapp's blockchain resides.

* **Enter secret of your testnet account**

Enter a password of your choosing. **Important**: Keep a record of your password, otherwise you will need to regenerate the genesis block.

* **Update existing genesis block? (or create a new one)**

Answering yes will retain the existing genesis block, keeping delegates and previous dapps. **Important**: Answer **no** if this is the first time you have launched **lisk-cli** for a given dapp.

* **Enter DApp name**

Enter the name of your dapp, e.g. `myFirstDapp`.

* **Enter DApp description**

Enter a brief description of your dapp's intent and purpose.

* **Enter Github clone url**

Enter the clone url to your dapp's github repository. **Important**: Enter the SSH based clone URL, for example: `git@github.com:username/myFirstDapp.git`

* **Enter public keys of dapp forgers - hex array, use ',' for separator**

Enter the public key of each account which will forge the side chain of your dapp. **Note**: The public key of the testnet account is added by default.

Separate each public key with a comma like so: `key1,key2,key3`

* **Add DApp to autolaunch**

Answering **yes** will set your dapp to automatically launch upon starting Lisks.

#### Example

Below is an example of how to create a test dapp using **Lisk CLI** with the corresponding output:

```text
? Existing blockchain.db file will be replaced, are you sure? Yes
? Enter secret of your testnet account ******
? Update current genesis block? (or create a new one) No
? Enter DApp name test
? Enter DApp decription test
? Enter Github clone url git@github.com:username/myFirstDapp.git
Generating unique genesis block...
? Enter public keys of dapp forgers - hex array, use ',' for separator (808c2a6e3bf0a8a6edd64356e98c8aab4daeacb4dc177a8a20a6442b40d1f0e0)
Creating DApp genesis block
Fetching Lisks DApp Toolkit
Connecting local repository with remote repository
Saving genesis blocks
Updating config
? Add DApp to autolaunch Yes
Done (DApp id is 16595324874141671114)
```

Upon successful completion, the **Lisk CLI** will return the dapp's unique id, in this case: **16595324874141671114**.

If you answered **Yes** to autolaunch the dapp, then you can launch it by starting Lisks, using the following command:

```text
node app.js
```

Once Lisks has loaded, your dapp should have launched. To verify this, simply open your browser with the following link: [http://localhost:7000/dapps/[dappid]/](http://localhost:7000/dapps/[dappid]/), replacing **[dappid]** with your dapp's own unique identifier.

All done! In the [next tutorial](MessagingDapp.md), we describe how to make a new Messaging Dapp using Lisks's Dapp SDK.
