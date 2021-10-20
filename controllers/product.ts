import { Request, Response } from "express";
import Product from "../models/product";
import { getAllProducts, saveProduct, searchProductByProductName } from "../services/product";

export const loadProducts = async ( req: Request , res: Response ) => {

    // get params
    let result = await getAllProducts();
    
    res.json({
        isCorrect: true,
        message: "Registro obtenido correctamente",
        data: result ,
    })

}

export const saveProductPost = async ( req: Request , res: Response ) => {

    console.log(req.body)
    // get params
    const product = new Product( req.body )
    
    let { isCorrect, data } = await saveProduct( product );

        res.json({
            isCorrect: isCorrect,
            message: "Registro exitoso",
            data: data ,
        })

}


export const searchProductByName = async (  req: Request , res: Response ) => {

    const { search } = req.params;

    let {  isCorrect, data }  = await searchProductByProductName( search );


    res.json({
        isCorrect: isCorrect,
        message: "Registro exitoso",
        data: data ,
    })
}