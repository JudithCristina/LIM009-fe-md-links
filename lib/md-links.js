"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _pathController = require("./path-controller.js");

var _pathController2 = require("./path-controller2.js");

var fs = require('fs');

var path = require('path');

var mdLinks = function mdLinks(path, options) {
  return new Promise(function (resolve, rejects) {
    if (fs.statSync(path)) {
      var arrayFile = (0, _pathController.arrayFileOfDirectory)(path);

      if ((0, _pathController.validatePathAbsolute)(path) && options.validate === false) {
        if (arrayFile.length !== 0) {
          resolve((0, _pathController2.pathMdLinks)(path));
        } else {
          resolve('No se encontraron archivos.md');
        }
      } else if ((0, _pathController.validatePathAbsolute)(path) && options.validate === true) {
        if (arrayFile.length !== 0) {
          resolve((0, _pathController2.validateLinks)(path));
        } else {
          resolve('No se encontraron archivos.md');
        }
      }
    }
  })["catch"](function (e) {
    if (e.code === "ENOENT") {
      return "ruta incorrecta";
    }
  });
};

exports.mdLinks = mdLinks;
mdLinks('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/src', {
  validate: false
}).then(function (result) {
  console.log(result);
})["catch"](function (e) {
  console.log(e);
});