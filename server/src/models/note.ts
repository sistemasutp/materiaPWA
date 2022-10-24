import { DataTypes } from 'sequelize';
import db from '../db/conn';

const Note = db.define('Note', {
	title: {
		type: DataTypes.STRING
	},
	content: {
		type: DataTypes.STRING
	}
},{
	createdAt: false,
	updatedAt: false
});

export default Note;