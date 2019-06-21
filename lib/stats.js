"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValidateStatLinks = exports.getStatLinks = void 0;

var _validate = require("./validate.js");

var path1 = '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica';
var arrayOfObj = [{
  href: 'https://github.com/user/repo/blob/branch/other_file.md',
  text: 'a link',
  file: '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica1/practica2.md',
  code: 404,
  status: 'Fail'
}, {
  href: 'https://youtuber.com',
  text: 'a link',
  file: '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica1/practica3.md',
  code: 'ECONNRESET',
  status: 'Fail'
}, {
  href: 'https://github.com/JudithCristina',
  text: 'mi github',
  file: '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica1.md',
  code: 200,
  status: 'OK'
}, {
  href: 'https://github.com/Judith//-',
  text: 'mi github',
  file: '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica2.md',
  code: 404,
  status: 'Fail'
}, {
  href: 'https://github.com/JudithCristina',
  text: 'mi github',
  file: '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica/practica2.md',
  code: 200,
  status: 'OK'
}];

var getStatLinks = function getStatLinks(arrayOfObj) {
  var arrayOfUrls = arrayOfObj.map(function (element) {
    return element.href;
  });
  console.log(arrayOfUrls);
  var linksUnike = Array.from(new Set(arrayOfUrls));
  return {
    Total: arrayOfUrls.length,
    Unicos: linksUnike.length
  };
};

exports.getStatLinks = getStatLinks;

var getValidateStatLinks = function getValidateStatLinks(arrayOfObj) {
  var arrayOfUrls = arrayOfObj.map(function (element) {
    return element.href;
  });
  var linksUnike = Array.from(new Set(arrayOfUrls));
  var arrayOfUrlsBrocken = arrayOfObj.filter(function (element) {
    return element.status == 'Fail';
  });
  return {
    Total: arrayOfUrls.length,
    Unicos: linksUnike.length,
    Broken: arrayOfUrlsBrocken.length
  };
};

exports.getValidateStatLinks = getValidateStatLinks;
console.log(getStatLinks(arrayOfObj));
console.log(getValidateStatLinks(arrayOfObj));