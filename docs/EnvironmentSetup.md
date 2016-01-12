Before we can start building our first Crypti dapp, we must first setup our development environment.

Please ensure the below requirements are met before continuing.

* Mac OS X or Ubuntu Linux
* [Nodejs](https://nodejs.org/dist/latest-v0.12.x/) (v0.12)
* [SQLite](https://www.sqlite.org/download.html) (v3.8)
* [Npm](https://www.npmjs.com/)
* [Git](http://www.git-scm.com/)

## Mac OS X

1. Download and install the [Xcode](https://developer.apple.com/xcode/) developer tools from the App Store.

2. Open a command prompt and proceed with the following:

  1. Install the Homebrew package manager.

    ```
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```

  2. Install **nodejs** (package also includes **npm**).

    ```
    brew install homebrew/versions/node012
    ```

  3. Install **sqlite**, **git** and **wget**.

    ```
    brew install sqlite git wget
    brew link sqlite --force
    ```

**One important note**: Crypti's VM (Virtual Machine) is only sandboxed on Linux operating systems. **Mac OS X** can be used for development purposes, **but in production you will need to use Linux based master nodes**.

## Ubuntu Linux

Open a command prompt and proceed with the following:

1. Install **sqlite** and **git** plus some build essentials.

  ```
  sudo apt-get install sqlite3 git build-essential curl wget unzip
  ```

2. Add the NodeSource package repository to your system.

  ```
  curl -sL https://deb.nodesource.com/setup_0.12 | sudo -E bash -
  ```

3. Install **nodejs** (package also includes **npm**).

  ```
  sudo apt-get install -y nodejs
  ```

## Windows _(using Vagrant)_

Currently we only support development on Mac OS X and Linux operating systems. If you don't have either, see below for instructions on installing a Ubuntu based virtual machine using [Vagrant](https://www.vagrantup.com/).

1. Download and install the latest versions of the following applications:

  * [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)
  * [VirtualBox](https://www.virtualbox.org/)
  * [Vagrant](https://www.vagrantup.com/)

2. Open a command prompt. Then make a directory to store your environment.

  ```sh
  mkdir crypti
  cd crypti
  ```

3. Initialize a new Ubuntu based virtual machine using vagrant:

  ```sh
  vagrant init ubuntu/trusty64
  ```

4. Open and edit the file named `Vagrantfile` as follows:

  ```
  Vagrant.configure(2) do |config|
    config.vm.box = "ubuntu/trusty64"
    config.vm.network "forwarded_port", guest: 7040, host: 7040

    config.vm.provider "virtualbox" do |vb|
      vb.memory = "1024"
    end
  end
  ```

5. Boot up the virtual machine and let it install:

 ```
 vagrant up
 ```

 Once the virtual machine has finished installing, you should have a fully functioning environment running Ubuntu 14.04 LTS 64-bit.

6. Verify the status of the virtual machine using the following command:

  ```sh
  vagrant status
  ```

  Vagrant should state the VM is running, and give instructions on how to shutdown or suspend it.

7. Login to your newly created VM using the following credentials:

  * IP address: 127.0.0.1
  * Port: 2222
  * Username: vagrant
  * Password: vagrant

 To login, enter the command `vagrant ssh` or open and use PuTTY.

8. Upon successfully logging into your VM. Proceed with the following steps:

  1. Install **sqlite** and **git** plus some build essentials.

    ```
    sudo apt-get install sqlite3 git build-essential curl wget unzip
    ```

  2. Add the NodeSource package repository to your system.

    ```
    curl -sL https://deb.nodesource.com/setup_0.12 | sudo -E bash -
    ```

  3. Install **nodejs** (package also includes **npm**).

    ```
    sudo apt-get install -y nodejs
    ```

9. Your virtual machine environment should now be ready.

By default, Vagrant synchronizes your project directory between the local machine and client VM. For example, the contents of ```C:\Users\User\crypti``` are accessible as ```/vagrant``` on the client VM and vice versa.

For further information about using vagrant, please read the [official vagrant documentation](https://docs.vagrantup.com/v2/).

## GitHub / SSH Keys

If you don't have a GitHub account already, then we would recommend [signing up](https://github.com/join) for one, before proceeding any further.

Please also ensure, you have a public / private SSH keypair installed within the operating system you are developing on, and that the public key has been added to your GitHub account.

To verify you have them installed, or generate a new keypair. Please read the appropriate GitHub help page:

* [Generating SSH keys on Mac OS X](https://help.github.com/articles/generating-ssh-keys/#platform-mac)
* [Generating SSH keys on Linux](https://help.github.com/articles/generating-ssh-keys/#platform-linux)

## Crypti Testnet

To start work on our dapp, we first need to install a **testnet** version of Crypti. This can be done by running the following commands:

On **Mac OS X** operating systems:

```sh
wget http://downloads.crypti.me/crypti-node/development/macos-0.5.1.zip
unzip macos-0.5.1.zip
cd 0.5.1
npm install --production
```

On **Linux** operating systems (or vagrant):

**TIP:** If using vagrant, it is a good idea to change to the shared: `/vagrant` directory as described above. This way, you can easily access your dapp's files from within the host operating system.

```sh
wget http://downloads.crypti.me/crypti-node/development/linux-0.5.1.zip
unzip linux-0.5.1.zip
cd 0.5.1
npm install --production
```

Then launch Crypti and verify our base testnet is working correctly:

```sh
node app.js
```

If successful, Crypti will launch and connect to the base testnet network.

## Crypti-cli

Now let's install **crypti-cli** and finally start work on our first dapp:

```sh
sudo npm install -g crypti-cli
```

After installation completes, check that **crypti-cli** is installed correctly:

```sh
crypti-cli -h
```

If successful **crypti-cli** should yield the following output:

```
Usage: crypti-cli [options] [command]

Commands:

    dapps [options]      manage your dapps
    contract [options]   contract operations
    crypto [options]     crypto operations

Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

Congratulations! We are now ready to create our first dapp! Let's continue with the [next tutorial](BasicDapp.md).
