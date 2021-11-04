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
const cors_1 = __importDefault(require("cors"));
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const { connection } = require('../database/config');
const usuario_1 = __importDefault(require("../routes/usuario"));
const product_1 = __importDefault(require("../routes/product"));
const category_1 = __importDefault(require("../routes/category"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios',
            products: '/api/products',
            category: '/api/category'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '9000';
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);
        //connection db
        this.connectionDB();
        //middleware
        this.middlewares();
        // definir rutas
        this.routes();
        this.swagger();
    }
    connectionDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection();
        });
    }
    middlewares() {
        //Cors
        this.app.use((0, cors_1.default)());
        //Lectura del body
        this.app.use(express_1.default.json());
        //Carpeta publica
        this.app.use(express_1.default.static('public'));
        // Sockets
        this.sockets();
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_1.default),
            this.app.use(this.apiPaths.products, product_1.default),
            this.app.use(this.apiPaths.category, category_1.default);
    }
    sockets() {
        this.io.on('connection', (socket) => {
            console.log('cliente conectado');
            socket.on('disconnect', () => {
                console.log('cliente desconectado');
            });
        });
    }
    swagger() {
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    }
    listen() {
        this.server.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map