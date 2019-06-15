"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathMd = void 0;

var _pathController = require("./path-controller.js");

var path1 = '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/';

var pathMd = function pathMd(path1) {
  return (0, _pathController.arrayFileOfDirectory)((0, _pathController.validatePathAbsolute)(path1));
};

exports.pathMd = pathMd;
console.log(pathMd(path1));