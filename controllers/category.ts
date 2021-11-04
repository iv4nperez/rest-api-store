import { Request, Response } from "express";
import Category from "../models/category";
import { getCategory, saveCategory } from "../services/category";

export const getCategories = async ( req: Request , res: Response ) => {

    let result = await getCategory(); 

    if ( !result.isCorrect ) {
        res.status(400);
    }
    
    res.json(result);
}

export const saveCategories = async ( req: Request , res: Response ) => {

    const category = new Category( req.body )
    
    let result = await saveCategory( category );

    if ( !result.isCorrect ) {
        res.status(400);
    }
    
    res.json(result);

}