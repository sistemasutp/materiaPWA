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
const express_1 = __importDefault(require("express"));
const note_1 = __importDefault(require("../routes/note"));
const conn_1 = __importDefault(require("../db/conn"));
const cors_1 = __importDefault(require("cors"));
class Server {
    //varibles inicialization
    constructor() {
        console.log(process.env.PORT);
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares(); //before routes always
        this.routes();
        this.dbConn();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`app running on port ${this.port}`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'API Working'
            });
        });
        this.app.use('/api/notes', note_1.default);
    }
    midlewares() {
        //parsear el body
        this.app.use(express_1.default.json());
        //CORS
        this.app.use((0, cors_1.default)());
    }
    dbConn() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield conn_1.default.authenticate();
                console.log('you are connected to app_note database from MYSQL');
            }
            catch (error) {
                console.log(error);
                console.log('The connection fail');
            }
        });
    }
}
exports.default = Server;
