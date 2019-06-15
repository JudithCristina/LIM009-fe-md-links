"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathMd = exports.searchFileMd = exports.arrayFileOfDirectory = exports.readDirectory = exports.readFile = exports.isDirectory = exports.isFile = exports.validatePathAbsolute = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var absolutePath = '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/';

var validatePathAbsolute = function validatePathAbsolute(absolutePath) {
  if (_path["default"].isAbsolute(absolutePath) === true) {
    return absolutePath;
  } else {
    return _path["default"].resolve(absolutePath);
  }
};

exports.validatePathAbsolute = validatePathAbsolute;

var isFile = function isFile(absolutePath) {
  var stats = _fs["default"].statSync(absolutePath);

  return stats.isFile();
};

exports.isFile = isFile;

var isDirectory = function isDirectory(absolutePath) {
  var stats = _fs["default"].statSync(absolutePath);

  return stats.isDirectory();
};

exports.isDirectory = isDirectory;

var readFile = function readFile(absolutePath) {
  var fileContent = _fs["default"].readFileSync(absolutePath, 'utf8');

  return fileContent;
};

exports.readFile = readFile;

var readDirectory = function readDirectory(absolutePath) {
  var arrayOfFile = _fs["default"].readdirSync(absolutePath, 'utf8');

  var array1 = arrayOfFile.map(function (file) {
    return _path["default"].join(absolutePath, file);
  });
  /*let array2= array1.map(file => {if(isDirectory(file)===true) {
    console.log(file)*/

  return array1;
};

exports.readDirectory = readDirectory;

var arrayFileOfDirectory = function arrayFileOfDirectory(absolutePath) {
  var array = [];

  if (isFile(absolutePath)) {
    if (searchFileMd(absolutePath)) {
      array.push(absolutePath);
    }
  } else {
    var dir = _fs["default"].readdirSync(absolutePath);

    dir.forEach(function (file) {
      var arrayTotal = arrayFileOfDirectory(_path["default"].join(absolutePath, file));
      array = array.concat(arrayTotal);
    });
  }

  return array;
};

exports.arrayFileOfDirectory = arrayFileOfDirectory;

var searchFileMd = function searchFileMd(absolutePath) {
  var fileMd = _path["default"].extname(absolutePath) === '.md';
  return fileMd;
};

exports.searchFileMd = searchFileMd;

var pathMd = function pathMd(absolutePath) {
  var ruta = validatePathAbsolute(absolutePath);
  return arrayFileOfDirectory(ruta);
};

exports.pathMd = pathMd;
console.log(pathMd(absolutePath)); //readDir('../archivos');
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