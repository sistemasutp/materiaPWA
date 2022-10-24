import express, { Application, Request, Response } from 'express';
import routesNote from '../routes/note';
import db from '../db/conn';
import cors from 'cors';

class Server {
	//variables
	private app: Application;
	private port: string;

	//varibles inicialization
	constructor(){
		console.log(process.env.PORT);
		this.app = express();
		this.port = process.env.PORT || '3001';
		this.listen();
		this.midlewares();//before routes always
		this.routes();
		this.dbConn();
	}

	listen(){
		this.app.listen(this.port, () =>{
			console.log(`app running on port ${this.port}`);
		})
	}

	routes() {
		this.app.get('/', (req: Request, res: Response) => {
			res.json({
				msg: 'API Working'
			})
		})
		this.app.use('/api/notes', routesNote);
	}

	midlewares(){
		//parsear el body
		this.app.use(express.json());

		//CORS
		this.app.use(cors());
	}

	async dbConn(){
		try{
			await db.authenticate();
			console.log('you are connected to app_note database from MYSQL');
		}catch (error){
			console.log(error);
			console.log('The connection fail');
		}
	}
}

export default Server;