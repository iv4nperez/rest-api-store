import express, { Application } from 'express'
import cors from "cors";

const { dbConnection } = require('../database/config');

import userRoutes from '../routes/usuario';
import productRoutes from '../routes/product';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios',
        products: '/api/products' 
    }

    constructor(){
        this.app  = express();
        this.port = process.env.PORT || '9000';

        //connection db
        this.connectionDB();
        //middleware
        this.middlewares();
        // definir rutas
        this.routes();
    }

    async connectionDB() {
        await dbConnection();
    }

    middlewares() {
        //Cors
        this.app.use( cors() );
        //Lectura del body
        this.app.use( express.json() );
        //Carpeta publica
        this.app.use( express.static('public') );

    }

    routes(){
        this.app.use( this.apiPaths.usuarios, userRoutes ),
        this.app.use( this.apiPaths.products, productRoutes )
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en puerto ${ this.port }` )
        })
    }
}

export default Server;