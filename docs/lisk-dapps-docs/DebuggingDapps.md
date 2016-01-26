# Debugging Dapps

Requirements:

* [Lisk Sandbox](https://github.com/LiskHQ/lisk-sandbox) - Version **1.0.3** and above.

**Important:** If you have installed the Lisk Sandbox module before (see **node_modules/lisk-sandbox**). Please check the version, it must be greater than or equal to 1.0.3. If you have an older version of Lisk sandbox, please run the following commands:

```text
rm -rf node_modules/lisk-sandbox
npm install lisk-sandbox
```

Debugging is enabled by launching Lisk with the **DEBUG** environment variable assgined with a value of **1**, for example:

```text
DEBUG=1 node app.js
```

## Debugging with Node-inspector

Install [node-inspector](https://github.com/node-inspector/node-inspector), a debugger interface for Node.js applications:

```text
npm install -g node-inspector
```

Launch Lisk:

```text
DEBUG=1 node app.js
```

Launch node-inspector:
```text
node-inspector
```

## Debugging with WebStorm

Click on:

```text
Run -> Edit Configurations -> Nodejs Remote Debug
```

Add a [new debugging configuration](http://www.jetbrains.com/webstorm/help/run-debug-configuration-node-js-remote-debug.html), using the default settings.

Launch Lisk:

```text
DEBUG=1 node app.js
```

Launch the [remote debugger](https://www.jetbrains.com/webstorm/help/debugging-javascript.html#d268420e536) from within WebStorm.
