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
exports.saveCategories = exports.getCategories = void 0;
const category_1 = __importDefault(require("../models/category"));
const category_2 = require("../services/category");
const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield (0, category_2.getCategory)();
    if (!result.isCorrect) {
        res.status(400);
    }
    res.json(result);
});
exports.getCategories = getCategories;
const saveCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = new category_1.default(req.body);
    let result = yield (0, category_2.saveCategory)(category);
    if (!result.isCorrect) {
        res.status(400);
    }
    res.json(result);
});
exports.saveCategories = saveCategories;
//# sourceMappingURL=category.js.map