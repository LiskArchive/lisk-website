Requirements:

* [Crypti Sandbox](https://www.npmjs.com/package/crypti-sandbox) - Version **1.0.3** and above.

**Important:** If you have installed the Crypti Sandbox module before (see **node_modules/crypti-sandbox**). Please check the version, it must be greater than or equal to 1.0.3. If you have an older version of Crypti sandbox, please run the following commands:

```sh
rm -rf node_modules/crypti-sandbox
npm install crypti-sandbox
```

Debugging is enabled by launching crypti with the **DEBUG** environment variable assgined with a value of **1**, for example:

```sh
DEBUG=1 node app.js
```

## Debugging with Node-inspector

Install [node-inspector](https://github.com/node-inspector/node-inspector), a debugger interface for Node.js applications:

```sh
npm install -g node-inspector
```

Launch crypti:

```sh
DEBUG=1 node app.js
```

Launch node-inspector:
```sh
node-inspector
```

## Debugging with WebStorm

Click on:

```
Run -> Edit Configurations -> Nodejs Remote Debug
```

Add a [new debugging configuration](http://www.jetbrains.com/webstorm/help/run-debug-configuration-node-js-remote-debug.html), using the default settings.

Launch crypti:

```sh
DEBUG=1 node app.js
```

Launch the [remote debugger](https://www.jetbrains.com/webstorm/help/debugging-javascript.html#d268420e536) from within WebStorm.
