[![Build Status](https://travis-ci.org/AceDZN/Angular2Boilerplate.svg?branch=master)](https://travis-ci.org/AceDZN/Angular2Boilerplate)
# Angular2StarterKit
just an Angular Boilerplate for future projects

#### Features
dev/ folder holds TypeScript (Angular 2) code => compiled into app/ folder, bundled into bundle.js (incl. dependencies).

assets/ folder holds other assets (e.g. SCSS code) => compiled into src/ folder.

Bundling of TypeScript is managed via SystemJS Builder. Code compilation is managed via Gulp.

#### Usage
Important: Typescript and npm has to be installed on your machine!

1: Clone repo
```
git clone https://github.com/AceDZN/Angular2Boilerplate.git
```
2: Install packages
```
npm install
```
3: Start server (includes auto refreshing) and gulp watcher
```
npm start
```

4: Visit localhost:3000 (default) if the tab hasn't opened automatically