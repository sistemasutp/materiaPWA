import { Request, Response } from 'express';
import Note from '../models/note';

//Get all
export const getNotes = async (req: Request, res: Response) => {
	const listNotes = await Note.findAll();
	res.json(listNotes);
}
//Get for ID
export const getNote = async (req: Request, res: Response) => {
	const { id } = req.params;
	const note = await Note.findByPk(id);

	if(note){
		res.json(note);
	}else{
		res.status(404).json({
			msg: `Don't exist note with id ${id}`
		})
	}}

//Delete for ID
export const deleteNote = async (req: Request, res: Response) => {
	const { id } = req.params;
	const note = await Note.findByPk(id);

	if(!note){
		res.status(404).json({
			msg: `Don't exist note with id ${id}`
		})
	}else{
		await note.destroy();
		res.json({
			msg: `Deleted note with id ${id}`
		})
	}
}

//Post for ID
export const postNote = async (req: Request, res: Response) => {
	const { body } = req;

	try{
		await Note.create(body);
		res.json({
			msg: `Note created`
		})
	}catch (error) {
		console.log(error);
		res.json({
			msg: `Note not created`
		})
	}

		
}

//Put for ID
export const putNote = async (req: Request, res: Response) => {
	const { body } = req;
	const { id } = req.params;

	try{
		const note = await Note.findByPk(id);
		if(note){
			await note.update(body);
			res.json({
				msg: `Note updated`
			})
		}else{
			res.status(404).json({
				msg: `Don't exist note with id ${id}`
			})
		}
	}catch (error){
		console.log(error);
		res.json({
			msg: `Note not updated`
		})
	}		
}