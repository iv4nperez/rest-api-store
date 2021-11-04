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
exports.saveCategory = exports.getCategory = void 0;
const category_1 = __importDefault(require("../models/category"));
const Response_1 = require("../helpers/Response");
const getCategory = () => __awaiter(void 0, void 0, void 0, function* () {
    let query = {
        status: true
    };
    let result = new Response_1.Response({}, 0, false);
    try {
        const count = yield category_1.default.countDocuments(query);
        const category = yield category_1.default.find(query).exec();
        result.isCorrect = true;
        result.result = category;
        result.count = count;
    }
    catch (error) {
        result.isCorrect = false;
    }
    return result;
});
exports.getCategory = getCategory;
const saveCategory = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    let result = new Response_1.Response({}, 0, false);
    try {
        const category = new category_1.default(payload);
        category.save();
        result.isCorrect = true;
        result.result = category;
    }
    catch (error) {
        result.isCorrect = false;
    }
    return result;
});
exports.saveCategory = saveCategory;
//# sourceMappingURL=category.js.map