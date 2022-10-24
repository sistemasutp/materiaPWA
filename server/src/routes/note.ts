import { Router } from 'express';
import { getNotes, getNote, deleteNote, postNote, putNote } from '../controllers/note.controller';

const router = Router();

router.get('', getNotes);
//get note for ID
router.get('/:id', getNote);
//Delete note for ID
router.delete('/:id', deleteNote);
//Post note
router.post('/', postNote);
//Put note
router.put('/:id', putNote);

export default router;