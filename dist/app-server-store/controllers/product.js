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
exports.searchProductByName = exports.saveProductPost = exports.loadProducts = void 0;
const product_1 = __importDefault(require("../models/product"));
const product_2 = require("../services/product");
const loadProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // get params
    let result = yield (0, product_2.getAllProducts)();
    res.json({
        isCorrect: true,
        message: "Registro obtenido correctamente",
        data: result,
    });
});
exports.loadProducts = loadProducts;
const saveProductPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    // get params
    const product = new product_1.default(req.body);
    let { isCorrect, data } = yield (0, product_2.saveProduct)(product);
    res.json({
        isCorrect: isCorrect,
        message: "Registro exitoso",
        data: data,
    });
});
exports.saveProductPost = saveProductPost;
const searchProductByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { search } = req.params;
    console.log(search);
    let { products, count } = yield (0, product_2.searchProductByProductName)(search);
    res.json({
        isCorrect: true,
        count: count,
        data: products,
    });
});
exports.searchProductByName = searchProductByName;
//# sourceMappingURL=product.js.map