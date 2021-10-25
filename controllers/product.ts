import { Request, Response } from "express";
import Product from "../models/product";
import { saveProduct, searchProductByProductName } from "../services/product";


// export const loadProducts = async ( req: Request , res: Response ) => {

//     console.log(req.query)
//     // get params
//     let result = await getAllProducts();

//     res.json({
//         isCorrect: true,
//         message: "Registro obtenido correctamente",
//         data: result ,
//     })

// }

export const saveProductPost = async ( req: Request , res: Response ) => {


    // get params
    const product = new Product( req.body )
    
    let { isCorrect, data } = await saveProduct( product );

        res.json({
            isCorrect: isCorrect,
            message: "Registro exitoso",
            data: data ,
        })

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