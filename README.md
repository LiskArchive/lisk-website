# Lisk Website

The official Lisk website.

## Prerequisites

- Node.js + npm (https://github.com/nodesource/distributions)
- Bower (http://bower.io/)
- Ruby (https://rvm.io/)

## Installation

1. Install node modules:

  ```
  npm install
  ```

2. Install sass:

  ```
  gem install sass
  ```

3. Install bower components:

  ```
  bower install
  ```

4. Install git submodules:

  ```
  git submodule init
  git submodule update
  ```

## Launch

1. Compile SaSS and JavaScript:

  ```
  grunt build
  ```

2. Launch app:

  ```
  node app.js
  ```

3. Open [http://localhost:8090/](http://localhost:8090/) in your browser.

## Development

To recompile any SaSS or JavaScript files as they are changed, simply run:

```
grunt
```
