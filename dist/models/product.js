"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const ProductSchema = new mongoose_1.Schema({
    picture: {
        type: String
    },
    starts: {
        type: Number,
        default: 0
    },
    store: {
        type: String,
        default: ''
    },
    productName: {
        type: String,
        required: [true, 'The productName is required']
    },
    productDescription: {
        type: String,
        required: [true, 'The productDescription is required']
    },
    productPrice: {
        type: Number,
        required: [true, 'The productPrice is required']
    },
    purchaseCondition: {
        type: String,
        default: ''
    },
    productDiscount: {
        type: Number,
        default: 0
    },
    status: {
        type: Boolean,
        default: true
    },
    category: {
        type: String,
        required: true,
        // emun: [
        //     'VINOS_Y_LICORES',
        //     'BELLEZA_Y_CUIDADO_PERSONAL',
        //     'AGUA_JUGOS_Y_REFRESCOS',
        //     'LIMPIEZA_DEL_HOGAR'
        // ]
    }
    // categoryId:{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Category',
    //     required: true
    // }
});
exports.default = mongoose_1.default.model('Product', ProductSchema);
//# sourceMappingURL=product.js.map