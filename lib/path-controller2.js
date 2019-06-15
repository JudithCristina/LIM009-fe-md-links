"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathMdLinks = void 0;

var _pathController = require("./path-controller.js");

var _marked = _interopRequireDefault(require("marked"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var path1 = '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica';

var pathMdLinks = function pathMdLinks(path1) {
  var arrayOfFile = (0, _pathController.arrayFileOfDirectory)((0, _pathController.validatePathAbsolute)(path1));
  var arrObj = [];
  arrayOfFile.forEach(function (filePath) {
    var mdContent = (0, _pathController.readFile)(filePath);
    var renderer = new _marked["default"].Renderer(mdContent);

    renderer.link = function (href, _, text) {
      arrObj.push({
        href: href,
        text: text,
        file: filePath
      });
    };

    (0, _marked["default"])(mdContent, {
      renderer: renderer
    });
  });
  return arrObj;
};

exports.pathMdLinks = pathMdLinks;
console.log(pathMdLinks(path1));