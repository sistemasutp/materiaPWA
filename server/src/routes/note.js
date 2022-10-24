"use strict";
exports.__esModule = true;
var express_1 = require("express");
var note_controller_1 = require("../controllers/note.controller");
var router = (0, express_1.Router)();
router.get('', note_controller_1.getNotes);
//get note for ID
router.get('/:id', note_controller_1.getNote);
//Delete note for ID
router["delete"]('/:id', note_controller_1.deleteNote);
//Post note
router.post('/', note_controller_1.postNote);
//Put note
router.put('/:id', note_controller_1.putNote);
exports["default"] = router;
