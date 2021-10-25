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
exports.searchProductByProductName = exports.saveProduct = void 0;
const product_1 = __importDefault(require("../models/product"));
const Response_1 = require("../helpers/Response");
// export const getAllProducts = async () => {
//     let query = {
//         status: true
//     }
//    let result = await Product.find( query );
//    return result;
// }
const saveProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const product = new product_1.default(payload);
    product.save();
    return {
        isCorrect: true,
        data: product
    };
});
exports.saveProduct = saveProduct;
const searchProductByProductName = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    let query = {
        status: true,
        productName: { "$regex": payload, $options: 'i' }
    };
    try {
        const count = yield product_1.default.countDocuments(query);
        const products = yield product_1.default.find(query).exec();
        return new Response_1.Response(products, count, true);
    }
    catch (error) {
        return new Response_1.Response([], 0, false);
    }
});
exports.searchProductByProductName = searchProductByProductName;
//# sourceMappingURL=product.js.map