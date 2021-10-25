import Product from "../models/product";
import { IProduct } from '../interfaces'
import { Response } from "../helpers/Response";

// export const getAllProducts = async () => {

//     let query = {
//         status: true
//     }

//    let result = await Product.find( query );

//    return result;
// }

export const saveProduct = async ( payload: IProduct ) => {
    const product = new Product( payload );
    product.save();

   return {
       isCorrect: true,
       data: product
   };
}

export const  searchProductByProductName = async ( payload: String ) : Promise<Response> => {

    let query: any = { 
        status: true,
        productName : { "$regex": payload, $options:'i' } 
    };

    try {
        
        const count    = await Product.countDocuments( query );
        const products = await Product.find( query ).exec();

        return new Response(products, count, true);

    } catch (error) {

        return new Response([], 0, false);        
    }

}