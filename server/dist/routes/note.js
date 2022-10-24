"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const note_controller_1 = require("../controllers/note.controller");
const router = (0, express_1.Router)();
router.get('', note_controller_1.getNotes);
//get note for ID
router.get('/:id', note_controller_1.getNote);
//Delete note for ID
router.delete('/:id', note_controller_1.deleteNote);
//Post note
router.post('/', note_controller_1.postNote);
//Put note
router.put('/:id', note_controller_1.putNote);
exports.default = router;
