"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayFileOfDirectory = exports.searchFileMd = exports.readDirectory = exports.readFile = exports.isDirectory = exports.isFile = exports.validatePathAbsolute = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var path1 = '/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/practica';

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

var searchFileMd = function searchFileMd(absolutePath) {
  var fileMd = _path["default"].extname(absolutePath) === '.md';
  return fileMd;
};

exports.searchFileMd = searchFileMd;

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
console.log(arrayFileOfDirectory('/home/judith-c-q-i/Escritorio/LIM009-fe-md-links'));