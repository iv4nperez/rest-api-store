
import Product, { IProduct } from "../models/product";

export const getAllProducts = async () => {

    let query = {
        status: true
    }

   let result = await Product.find( query );

   return result;
}

export const saveProduct = async ( payload: IProduct ) => {

    const product = new Product( payload );
    product.save();

   return {
       isCorrect: true,
       data: product
   };
}