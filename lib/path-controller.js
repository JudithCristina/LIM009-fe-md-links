"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchFileMd = exports.readDirectory = exports.readFile = exports.isDirectory = exports.isFile = exports.validatePathAbsolute = void 0;

var path = require('path');

var fs = require('fs');

var absolutePath = '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/';

var validatePathAbsolute = function validatePathAbsolute(absolutePath) {
  if (path.isAbsolute(absolutePath) === true) {
    return absolutePath;
  } else {
    return path.resolve(absolutePath);
  }
};

exports.validatePathAbsolute = validatePathAbsolute;

var isFile = function isFile(absolutePath) {
  var stats = fs.statSync(absolutePath);
  return stats.isFile();
};

exports.isFile = isFile;

var isDirectory = function isDirectory(absolutePath) {
  var stats = fs.statSync(absolutePath);
  return stats.isDirectory();
};

exports.isDirectory = isDirectory;

var readFile = function readFile(absolutePath) {
  var fileContent = fs.readFileSync(absolutePath, 'utf8');
  return fileContent;
}; //console.log(readFile('../archivos/lucero.md'));


exports.readFile = readFile;

var readDirectory = function readDirectory(absolutePath) {
  var arrayOfFile = fs.readdirSync(absolutePath, 'utf8');
  return arrayOfFile;
};

exports.readDirectory = readDirectory;

var searchFileMd = function searchFileMd(absolutePath) {
  var fileMd = path.extname(absolutePath) === '.md';
  return fileMd;
};

exports.searchFileMd = searchFileMd;
console.log(readDirectory(absolutePath)); //readDir('../archivos');
//console.log(readDir('../archivos'));
// Ruta relativa de una carpeta '../archivos';
// Ruta relativa de un archivo '../archivos/lucero.md';

/*export const filePathExists = (filePath) =>{ 
  return new Promise((resolve, reject) => { 
  fs.stat(filePath, (err, stats) => { 
   if (err && err.code === 'ENOENT') { 
   return resolve(false); 
   } else if (err) { 
   return reject(err); 
   } 
   if (stats.isFile() || stats.isDirectory()) { 
   return resolve(true); 
   } 
  }); 
  }); 
} 

/*export const filePathExists1 = (filePath) => {
  fs.stat(filePath, (err, stats)) => {
    if (stats.isFile() || stats.isDirectory()) { 
      return true; 
  }
  else { return false}
}
}*/

/*const readDirectory = (route) => {
  return fs.readdir(route, (err, files) => {
    if (err) throw err;
    files.forEach((f) => {
      isRouteFile(f)
    })
  })
}

export const gettingFsStatObject = (path) => {
  const stat = fs.statSync(path);
  return stat;
};*/

/*console.log(validatePathAbsolute(absolutePath))
console.log(readFile(absolutePath))*/