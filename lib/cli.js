"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinksCli = void 0;

var _mdLinks = require("./md-links.js");

var _stats = require("./stats.js");

var chalk = require('chalk');

var route = process.argv[2];
var validate = process.argv[3];
var stat = process.argv[4];

var mdLinksCli = function mdLinksCli(route, validate, stat) {
  if (route !== undefined && validate == undefined && stat == undefined) {
    return (0, _mdLinks.mdLinks)(route, {
      validate: false
    }).then(function (result) {
      var newArray = result.map(function (element) {
        return "href:".concat(element.href, "\ntext:[").concat(element.text, "]\nfile:").concat(element.file, "\n");
      });
      var routeCli = newArray.toString().replace(/,/g, '\n');
      return routeCli;
    })["catch"](console.error);
  } else if (route !== undefined && validate == '--validate' && stat == undefined) {
    return (0, _mdLinks.mdLinks)(route, {
      validate: true
    }).then(function (result) {
      var newArray = result.map(function (element) {
        return "href:".concat(element.href, "\ntext:[").concat(element.text, "]\nfile:").concat(element.file, "\ncode:").concat(element.code, "\nstatus:").concat(element.status, "\n");
      });
      var routeCli = newArray.toString().replace(/,/g, '\n');
      return routeCli;
    })["catch"](console.error);
  } else if (route !== undefined && validate == '--stats' && stat == undefined) {
    return (0, _mdLinks.mdLinks)(route, {
      validate: true
    }).then(function (result1) {
      var stats = (0, _stats.getStatLinks)(result1);
      return "Total: ".concat(stats.total, " \nUnique: ").concat(stats.unique, " \n");
    })["catch"](console.error);
  } else {
    return (0, _mdLinks.mdLinks)(route, {
      validate: true
    }).then(function (result1) {
      var stat = (0, _stats.getValidateStatLinks)(result1);
      return "Total: ".concat(stat.total, " \nUnique: ").concat(stat.unique, " \nBroken:").concat(stat.broken);
    });
  }
};
/*console.log(mdLinks(route,options2))*/


exports.mdLinksCli = mdLinksCli;
mdLinksCli(route, validate, stat).then(function (result) {
  console.log(result);
})["catch"](function (e) {
  console.log(e);
});
/*mdLinks(route, {validate: true})
.then(result => console.log(getStatLinks(result)))*/