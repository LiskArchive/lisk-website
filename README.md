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

## License
  
The MIT License (MIT)  
  
Copyright (c) 2016 Lisk  
Copyright (c) 2014-2015 Crypti  
  
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  
  
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
