"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinksCli = void 0;

var _mdLinks = require("./md-links.js");

var _stats = require("./stats.js");

var chalk = require('chalk');

var route = process.argv[2];
var parameter2 = process.argv[3];
var parameter3 = process.argv[4];

var mdLinksCli = function mdLinksCli(route, parameter2, parameter3) {
  if (route !== undefined && parameter2 == undefined && parameter3 == undefined) {
    return (0, _mdLinks.mdLinks)(route, {
      validate: false
    }).then(function (result) {
      if (typeof result === 'string') {
        return chalk.red.bold(result);
      } else {
        var newArray = result.map(function (element) {
          return "href:".concat(element.href, "\ntext:[").concat(element.text, "]\nfile:").concat(element.file, "\n");
        });
        var routeCli = newArray.toString().replace(/,/g, '\n');
        return routeCli;
      }
    });
  } else if (route !== undefined && parameter2 == '--validate' && parameter3 == undefined) {
    return (0, _mdLinks.mdLinks)(route, {
      validate: true
    }).then(function (result) {
      if (typeof result === 'string') {
        return chalk.red.bold(result);
      } else {
        var newArray = result.map(function (element) {
          return "href:".concat(element.href, "\ntext:[").concat(element.text, "]\nfile:").concat(element.file, "\ncode:").concat(element.code, "\nstatus:").concat(element.status, "\n");
        });
        var routeCli = newArray.toString().replace(/,/g, '\n');
        return routeCli;
      }
    });
  } else if (route !== undefined && parameter2 == '--stats' && parameter3 == undefined) {
    return (0, _mdLinks.mdLinks)(route, {
      validate: true
    }).then(function (result1) {
      if (typeof result1 === 'string') {
        return chalk.red.bold(result1);
      } else {
        var stats = (0, _stats.getStatLinks)(result1);
        return "Total: ".concat(stats.total, "\nUnique: ").concat(stats.unique);
      }
    });
  } else if (route !== undefined && parameter2 == '--validate' && parameter3 == '--stats') {
    return (0, _mdLinks.mdLinks)(route, {
      validate: true
    }).then(function (result1) {
      if (typeof result1 === 'string') {
        return chalk.red.bold(result1);
      } else {
        var stat = (0, _stats.getValidateStatLinks)(result1);
        return "Total: ".concat(stat.total, "\nUnique: ").concat(stat.unique, "\nBroken: ").concat(stat.broken);
      }
    });
  } else {
    return (0, _mdLinks.mdLinks)(route, {
      validate: true
    }).then(function (result1) {
      return chalk.red.bold("Corregir argumentos (path, --validate, --stats)\n");
    });
  }
};

exports.mdLinksCli = mdLinksCli;
mdLinksCli(route, parameter2, parameter3).then(function (result) {
  console.log(result);
})["catch"](function (e) {
  console.log(e);
});