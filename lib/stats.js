"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStatLinks = void 0;

var _validate = require("./validate.js");

var path1 = '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica';

var getStatLinks = function getStatLinks(arrayOfObj) {
  console.log(arrayOfObj);
  var arrayOfUrls = arrayOfObj.map(function (element) {
    return element.href;
  });
  return arrayOfUrls;
};

exports.getStatLinks = getStatLinks;
console.log(getStatLinks((0, _validate.validateLinks)(path1)));