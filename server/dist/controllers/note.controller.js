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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putNote = exports.postNote = exports.deleteNote = exports.getNote = exports.getNotes = void 0;
const note_1 = __importDefault(require("../models/note"));
//Get all
const getNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listNotes = yield note_1.default.findAll();
    res.json(listNotes);
});
exports.getNotes = getNotes;
//Get for ID
const getNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const note = yield note_1.default.findByPk(id);
    if (note) {
        res.json(note);
    }
    else {
        res.status(404).json({
            msg: `Don't exist note with id ${id}`
        });
    }
});
exports.getNote = getNote;
//Delete for ID
const deleteNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const note = yield note_1.default.findByPk(id);
    if (!note) {
        res.status(404).json({
            msg: `Don't exist note with id ${id}`
        });
    }
    else {
        yield note.destroy();
        res.json({
            msg: `Deleted note with id ${id}`
        });
    }
});
exports.deleteNote = deleteNote;
//Post for ID
const postNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield note_1.default.create(body);
        res.json({
            msg: `Note created`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Note not created`
        });
    }
});
exports.postNote = postNote;
//Put for ID
const putNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const note = yield note_1.default.findByPk(id);
        if (note) {
            yield note.update(body);
            res.json({
                msg: `Note updated`
            });
        }
        else {
            res.status(404).json({
                msg: `Don't exist note with id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Note not updated`
        });
    }
});
exports.putNote = putNote;
