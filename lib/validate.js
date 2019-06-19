"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateLinks = exports.pathMdLinks = void 0;

var _pathController = require("./path-controller.js");

var _marked = _interopRequireDefault(require("marked"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

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

var validateLinks = function validateLinks(path1) {
  var arrayLinks = pathMdLinks(path1).map(function (link) {
    return (0, _nodeFetch["default"])(link.href).then(function (res) {
      if (res.status >= 399) {
        link.code = res.status;
        link.status = res.statusText;
      } else {
        link.code = res.status;
        link.status = res.statusText;
      }

      return link;
    })["catch"](function (e) {
      link.code = e.code;
      link.status = "Fail";
      return link;
    });
  });
  return Promise.all(arrayLinks);
};
/*console.log(validateLinks(path1))

validateLinks(path1)
  .then(result=>{
console.log(result);
  })
  .catch(e=>{
    console.log(e);
      })*/


exports.validateLinks = validateLinks;