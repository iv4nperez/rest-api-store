import mongoose, { Schema, Document } from 'mongoose';
import { IProduct } from '../interfaces'

const ProductSchema = new Schema({
    picture:{
        type: String
    },
    starts:{
        type: Number,
        default: 0
    },
    store:{
        type: String,
        default: ''
    },
    productName:{
        type: String,
        required: [ true, 'The productName is required' ]
    },
    productDescription:{
        type: String,
        required: [ true, 'The productDescription is required' ]
    },
    productPrice:{
        type: Number,
        required: [ true, 'The productPrice is required' ]
    },
    purchaseCondition:{
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
    category:{
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


export default mongoose.model<IProduct>('Product', ProductSchema);