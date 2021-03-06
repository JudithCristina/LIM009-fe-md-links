"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _pathController = require("./path-controller.js");

var _validate = require("./validate.js");

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mdLinks = function mdLinks(path, options) {
  return new Promise(function (resolve, reject) {
    try {
      var arrayFile = (0, _pathController.arrayFileOfDirectory)(path);

      if ((0, _pathController.validatePathAbsolute)(path) && (!options || options.validate === false)) {
        if (arrayFile.length !== 0) {
          resolve((0, _validate.pathMdLinks)(path));
        } else {
          resolve('No se encontraron archivos.md');
        }
      } else if ((0, _pathController.validatePathAbsolute)(path) && options.validate === true) {
        if (arrayFile.length !== 0) {
          resolve((0, _validate.validateLinks)(path));
        } else {
          resolve('No se encontraron archivos.md');
        }
      }
    } catch (e) {
      if (e.code === "ENOENT") {
        var error = _chalk["default"].red.bold("Ruta incorrecta");

        reject(error);
      }
    }
  });
};
/*mdLinks ('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/README.md',{validate:true})
 .then((result)=>{
  console.log(result)
 })
  .catch((e)=>{
   console.log(e)
 })*/


exports.mdLinks = mdLinks;