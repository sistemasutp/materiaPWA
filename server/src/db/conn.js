"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var sequelize = new sequelize_1.Sequelize('app_note', 'root', '&&Jonathan&&', {
    host: 'localhost',
    dialect: 'mysql'
});
exports["default"] = sequelize;
