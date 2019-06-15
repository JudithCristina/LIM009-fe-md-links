"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathMd = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _pathController = require("./path-controller.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var path1 = '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica';

var pathMd = function pathMd(path1) {
  var arrayOfFile = (0, _pathController.arrayFileOfDirectory)((0, _pathController.validatePathAbsolute)(path1));
  var arrObj = []; // console.log(arrPaths);

  arrayOfFile.forEach(function (filePath) {
    var mdContent = (0, _pathController.readFile)(filePath).toString();
    return arrObj.push(mdContent);
  }); //console.log(arrObj);

  return arrObj;
};

exports.pathMd = pathMd;
console.log(pathMd(path1));