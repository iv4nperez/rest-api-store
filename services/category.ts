import Category from "../models/category";
import { ICategory } from '../interfaces'
import { Response } from "../helpers/Response";


export const getCategory = async (): Promise<Response> => {
    
    let query: any = { 
        status: true
    };
    let result = new Response( {}, 0, false );
 
    try {
        const count    = await Category.countDocuments( query );
        const category = await Category.find( query ).exec();

        result.isCorrect = true;
        result.result = category;
        result.count = count;

    } catch (error) {
        result.isCorrect = false;
    }

    return result;
}


export const saveCategory = async ( payload: ICategory ) => {
    
    let result = new Response( {}, 0, false );
 
    try {
        const category = new Category( payload );
        category.save();

        result.isCorrect = true;
        result.result = category

    } catch (error) {
        result.isCorrect = false;
    }

    return result;
}