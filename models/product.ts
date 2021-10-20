import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct  extends Document {
    picture: String,
    starts: Number,
    store: String,
    productName: String,
    productDescription: String,
    productPrice: Number,
    purchaseCondition: String,
    productDiscount: Number,
    productActive: Boolean
}

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
    }
});


export default mongoose.model<IProduct>('Product', ProductSchema);