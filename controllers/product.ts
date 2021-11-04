import { Request, Response } from "express";
import Product from "../models/product";
import { getProductByCategoryTypeName, saveProduct, searchProductByProductName } from "../services/product";

export const saveProductPost = async ( req: Request , res: Response ) => {

    // get params
    const product = new Product( req.body )
    let result = await saveProduct( product );

    if ( !result.isCorrect ) {
        res.status(400);
    }
    
    res.json(result);

}

export const searchProductByName = async (  req: Request , res: Response ): Promise<void> => {
    const { q = '' } = req.query;
    let query: string = q.toString();

    let result = await searchProductByProductName( query );

    if ( !result.isCorrect ) {
        res.status(400);
    }
    
    res.json(result);
}

export const getProductByCategory = async ( req: Request, res: Response ): Promise<void> => {

    const { category = '' } = req.query;
    let query: string = category.toString();

    let result = await getProductByCategoryTypeName( query );

    if ( !result.isCorrect ) {
        res.status(400);
    }
    
    
    res.json(result);

}