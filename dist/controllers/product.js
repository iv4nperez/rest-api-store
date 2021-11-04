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
exports.getProductByCategory = exports.searchProductByName = exports.saveProductPost = void 0;
const product_1 = __importDefault(require("../models/product"));
const product_2 = require("../services/product");
const saveProductPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // get params
    const product = new product_1.default(req.body);
    let result = yield (0, product_2.saveProduct)(product);
    if (!result.isCorrect) {
        res.status(400);
    }
    res.json(result);
});
exports.saveProductPost = saveProductPost;
const searchProductByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { q = '' } = req.query;
    let query = q.toString();
    let result = yield (0, product_2.searchProductByProductName)(query);
    if (!result.isCorrect) {
        res.status(400);
    }
    res.json(result);
});
exports.searchProductByName = searchProductByName;
const getProductByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category = '' } = req.query;
    let query = category.toString();
    let result = yield (0, product_2.getProductByCategoryTypeName)(query);
    if (!result.isCorrect) {
        res.status(400);
    }
    res.json(result);
});
exports.getProductByCategory = getProductByCategory;
//# sourceMappingURL=product.js.map