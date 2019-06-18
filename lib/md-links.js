"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _pathController = require("./path-controller.js");

var _pathController2 = require("./path-controller2.js");

var _assert = require("assert");

var fs = require('fs');

var path = require('path');

var mdLinks = function mdLinks(path, options) {
  return new Promise(function (resolve, rejects) {
    var arrayFile = (0, _pathController.arrayFileOfDirectory)(path);

    if ((0, _pathController.validatePathAbsolute)(path) && options.validate === false) {
      if (arrayFile.length !== 0) {
        resolve((0, _pathController2.pathMdLinks)(path));
      } else {
        rejects('No se encontraron archivos.md');
      }
    } else if ((0, _pathController.validatePathAbsolute)(path) && options.validate === true) {
      if (arrayFile.length !== 0) {
        resolve((0, _pathController2.validateLinks)(path));
      } else {
        rejects('No se encontraron archivos.md');
      }
    } else {
      console.log('error');
    }
  });
};

exports.mdLinks = mdLinks;
mdLinks('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/src', {
  validate: true
}).then(function (result) {
  console.log(result);
});
/*export const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    if (itExists(path)) { 
      const arrMds = mdPathArr(path);
      if (arrMds.length === 0) {
        reject('No se encontraron archivos .md');
      } else {
        const arrObjLinks = getObjectLinks(arrMds);
        if (options.validate) {
          validateLinks(arrObjLinks).then(res => resolve(res)).catch(err => resolve(err));
        } else {
          resolve(arrObjLinks);
        }
      } 
    } else {
      reject('Ingrese una ruta válida');
    }
  });
};

 const mdLinks = (route, options) => {
    return new Promise((resolve, reject) => {
      const currentPath = fs.statSync(route);
      {!path.isAbsolute(route) ? validatePath.pathToAbsolute(route) : currentPath;}
      const routesArr = validatePath.pathFiles(route);
      if (!options) {
        validatePath.linkExtract(routesArr) 
          .then(response => resolve(response))
      } else if (options.validate) {
        validatePath.linkExtract(routesArr) 
          .then((link) => validateLink.linkValidate(link))
          .then(response => resolve(response))
      }
    });
  };
  
  module.exports = mdLinks;

export const mdLinks = (path, obj) => {
    return new Promise((resolve => {
        if()
    }))
    if (obj.validate === false) {
        return new Promise((resolve, reject) => {
            resolve(gettingArrObjOfMdLinks(gettingArrOfMarkdownFiles(path)));
            reject("Something went wrong")
        })

    } else {
        return new Promise((resolve, reject) => {
            resolve(gettingStatsOfUrl(gettingArrObjOfMdLinks(gettingArrOfMarkdownFiles(path))));
            reject("Something went wrong")
        })
    }

};
*/