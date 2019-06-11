"use strict";

var pathIsAbsolute = require('path-is-absolute');

console.log(pathIsAbsolute('../src/index.js'));
console.log(pathIsAbsolute('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/src/index.js'));