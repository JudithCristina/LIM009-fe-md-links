#!/usr/bin/env node
"use strict";

var _cli = require("./cli.js");

(0, _cli.mdLinksCli)(process.argv[2], process.argv[3], process.argv[4]).then(function (result) {
  console.log(result);
})["catch"](function (e) {
  console.log(e);
});