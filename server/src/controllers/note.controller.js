"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.putNote = exports.postNote = exports.deleteNote = exports.getNote = exports.getNotes = void 0;
var note_1 = require("../models/note");
//Get all
var getNotes = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var listNotes;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, note_1["default"].findAll()];
            case 1:
                listNotes = _a.sent();
                res.json(listNotes);
                return [2 /*return*/];
        }
    });
}); };
exports.getNotes = getNotes;
//Get for ID
var getNote = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, note;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, note_1["default"].findByPk(id)];
            case 1:
                note = _a.sent();
                if (note) {
                    res.json(note);
                }
                else {
                    res.status(404).json({
                        msg: "Don't exist note with id ".concat(id)
                    });
                }
                return [2 /*return*/];
        }
    });
}); };
exports.getNote = getNote;
//Delete for ID
var deleteNote = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, note;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, note_1["default"].findByPk(id)];
            case 1:
                note = _a.sent();
                if (!!note) return [3 /*break*/, 2];
                res.status(404).json({
                    msg: "Don't exist note with id ".concat(id)
                });
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, note.destroy()];
            case 3:
                _a.sent();
                res.json({
                    msg: "Deleted note with id ".concat(id)
                });
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteNote = deleteNote;
//Post for ID
var postNote = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, note_1["default"].create(body)];
            case 2:
                _a.sent();
                res.json({
                    msg: "Note created"
                });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.log(error_1);
                res.json({
                    msg: "Note not created"
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.postNote = postNote;
//Put for ID
var putNote = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, id, note, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body;
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, note_1["default"].findByPk(id)];
            case 2:
                note = _a.sent();
                if (!note) return [3 /*break*/, 4];
                return [4 /*yield*/, note.update(body)];
            case 3:
                _a.sent();
                res.json({
                    msg: "Note updated"
                });
                return [3 /*break*/, 5];
            case 4:
                res.status(404).json({
                    msg: "Don't exist note with id ".concat(id)
                });
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_2 = _a.sent();
                console.log(error_2);
                res.json({
                    msg: "Note not updated"
                });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.putNote = putNote;
