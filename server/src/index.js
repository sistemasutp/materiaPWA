"use strict";
exports.__esModule = true;
var server_1 = require("./models/server");
var dotenv_1 = require("dotenv");
// Configuramos las variables de ambiente
dotenv_1["default"].config();
var server = new server_1["default"]();
