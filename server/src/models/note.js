"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var conn_1 = require("../db/conn");
var Note = conn_1["default"].define('Note', {
    title: {
        type: sequelize_1.DataTypes.STRING
    },
    content: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports["default"] = Note;
