# Installing Lisk (from Binaries)

This tutorial describes how to install the Lisk using pre-built binary packages.

To complete the installation, you will need to have `bash`, `wget` and `unzip` installed. The majority of operating systems have these installed by default.

## 1. Select Platform

The following operating systems and architectures are supported:

- [Linux (x86_64)](#linux-x86_64)
- [Linux (i686)](#linux-i686)
- [Linux (armv6l)](#linux-armv6l)
- [Linux (armv7l)](#linux-armv7l)
- [Darwin (x86_64)](#darwin-x86_64)
- [FreeBSD (amd64)](#freebsd-amd64)

If you are unsure which platform to choose from, open a terminal and run the following command:

```
uname -sm
```

The resulting output, should tell you if your machine is running on a supported operating system and architecture.

If your architecture is not supported yet, you can try building your own packages using the [lisk-build](https://github.com/LiskHQ/lisk-build) automated package building tool.

## 2. Download Lisk

Follow the relevant download instructions for your selected platform as listed below.

### Linux (x86_64)

1. Download the archive:

  ```
  wget https://downloads.lisk.io/lisk/main/lisk-0.1.0-Linux-x86_64.zip
  ```

2. Unzip the archive:

  ```
  unzip lisk-0.1.0-Linux-x86_64.zip
  ```

3. Change directory:

  ```
  cd lisk-0.1.0-Linux-x86_64
  ```

4. Proceed with the next step in this tutorial to [Start Lisk](#3-start-lisk).

### Linux (i686)

1. Download the archive:

  ```
  wget https://downloads.lisk.io/lisk/main/lisk-0.1.0-Linux-i686.zip
  ```

2. Unzip the archive:

  ```
  unzip lisk-0.1.0-Linux-i686.zip
  ```

3. Change directory:

  ```
  cd lisk-0.1.0-Linux-i686
  ```

4. Proceed with the next step in this tutorial to [Start Lisk](#3-start-lisk).

### Linux (armv6l)

Tested devices: [Raspberry Pi 1 Model B+](https://www.raspberrypi.org/products/model-b-plus/) / [Raspberry Pi Zero](https://www.raspberrypi.org/products/pi-zero/)

1. Download the archive:

  ```
  wget https://downloads.lisk.io/lisk/main/lisk-0.1.0-Linux-armv6l.zip
  ```

2. Unzip the archive:

  ```
  unzip lisk-0.1.0-Linux-armv6l.zip
  ```

3. Change directory:

  ```
  cd lisk-0.1.0-Linux-armv6l
  ```

4. Proceed with the next step in this tutorial to [Start Lisk](#3-start-lisk).

### Linux (armv7l)

Tested devices: [Raspberry Pi 2 Model B](https://www.raspberrypi.org/products/raspberry-pi-2-model-b/) / [C.H.I.P.](http://getchip.com/)

1. Download the archive:

  ```
  wget https://downloads.lisk.io/lisk/main/lisk-0.1.0-Linux-armv7l.zip
  ```

2. Unzip the archive:

  ```
  unzip lisk-0.1.0-Linux-armv7l.zip
  ```

3. Change directory:

  ```
  cd lisk-0.1.0-Linux-armv7l
  ```

4. Proceed with the next step in this tutorial to [Start Lisk](#3-start-lisk).

### Darwin (x86_64)

1. Download the archive:

  ```
  wget https://downloads.lisk.io/lisk/main/lisk-0.1.0-Darwin-x86_64.zip
  ```

2. Unzip the archive:

  ```
  unzip lisk-0.1.0-Darwin-x86_64.zip
  ```

3. Change directory:

  ```
  cd lisk-0.1.0-Darwin-x86_64
  ```

4. Proceed with the next step in this tutorial to [Start Lisk](#3-start-lisk).

### FreeBSD (amd64)

1. Download the archive:

  ```
  wget https://downloads.lisk.io/lisk/main/lisk-0.1.0-FreeBSD-amd64.zip
  ```

2. Unzip the archive:

  ```
  unzip lisk-0.1.0-FreeBSD-amd64.zip
  ```

3. Change directory:

  ```
  cd lisk-0.1.0-FreeBSD-amd64
  ```

4. Proceed with the next step in this tutorial to [Start Lisk](#3-start-lisk).

## 3. Start Lisk

To start lisk, simply run the following command from within the current directory:

```
bash lisk.sh autostart
```

On the first invocation of this command: Lisk will configure itself to automatically start when booting your machine, and a snapshot of the blockchain will be downloaded for your convenience.

To access the Lisk web client, open: [http://localhost:8000/](http://localhost:8000/), or replace **localhost** with your public IP address.

The Lisk web client should launch successfully.

## 4. Enable Forging

If you are running your node from a local machine, you can enable forging through the web client, without further interruption. **NOTE:** Should the Lisk node or machine need to be restarted, you will need to re-enable forging again.

If your node is running on a remote machine, or if you want to keep forging persistently enabled, you will need to follow the below instructions.

Stop the running Lisk node:

```
bash lisk.sh stop
```

Open config.json:

```
nano config.json
```

Arrow down until you find the following section:

```
"forging": {
  "secret" : [""]
}
```

Set the secret parameter to your account secret phrase.

```
"forging": {
  "secret" : ["YourDelegatePassphrase"] <- Replace with your delegate passphrase
}
```

(Optional) In the forging section you will also see an access property, this is used to allow only your IP address to enable forging through the web client.

```
"access": {
  "whiteList": ["127.0.0.1"] <- Replace with the IP which you will use to access your node
}
```

To set 2 accounts to forge on a single node, enter both account passphrases like below.

```
"forging": {
  "secret" : ["YourDelegatePassphrase1","YourDelegatePassphrase2"] <- Replace with your delegate passphrases
  "access": {
    "whiteList": ["127.0.0.1"]
  }
}
```

After you have typed in your passphrase. Hit: `Ctrl+ X` Then: `Y`

Start Lisk:

```
bash lisk.sh start
```

Then, open the Lisk web client and wait for the blockchain to load. Once the blockchain has loaded, navigate to "Forging" section, and verify that **Forging (Enabled)** appears in the top left corner.

## 5. Enable Secure Sockets Layer (SSL)

**NOTE:** To complete this step you require a signed certificate (from a CA) and a public and private key pair.

Stop the running Lisk node:

```
bash lisk.sh stop
```

Open config.json:

```
nano config.json
```

Arrow down until you find the following section:

```
"ssl": {
  "enabled": false,         < Change FROM false TO true
  "options": {
    "port": 443,            < Default SSL Port
    "address": "0.0.0.0",   < Change only if you wish to block web access to the node
    "key": "path_to_key",   < Replace FROM path_to_key TO actual path to key file
    "cert": "path_to_cert"  < Replace FROM path_to_cert TO actual path to certificate file
  }
}
```

After you are done, save changes and exit. Hit: `Ctrl+ X` Then: `Y`

**NOTE:** If SSL Port configured above (ssl > options > port) is within well known ports range (below 1024), you must start Lisk with admin rights:

```
sudo bash lisk.sh start
```

If the port is above 1023, you can start Lisk normally:

```
bash lisk.sh start
```

Open the web client. You should now have an SSL enabled connection.

## 6. Available Commands

Listed below, are the available commands which can be used to manage your Lisk node.

To check the status of lisk:

```
bash lisk.sh status
```

To monitor the log file of lisk:

```
bash lisk.sh logs
```

To stop/restart/start lisk:

```
bash lisk.sh stop
bash lisk.sh start
bash lisk.sh restart
```

To automatically start lisk when booting the machine:

```
bash lisk.sh autostart
```

To replace the blockchain with a new snapshot:

```
bash lisk.sh rebuild
```
