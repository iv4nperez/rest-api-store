import mongoose, { Schema, Document } from 'mongoose';
import { ICategory } from '../interfaces'

const CategorySchema = new Schema({
    name: {
        type: String,
        required: [ true, 'The name is required' ]
    },
    typeName: {
        type: String,
        required: [ true, 'The typeName is required' ]
    },
    status: {
        type: Boolean,
        default: true
    }
});



export default mongoose.model<ICategory>('Category', CategorySchema)