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

export const  searchProductByProductName = async ( payload?: String ) : Promise<{ products: Array<any>, count: number }> => {

    let query: any = { 
        status: true,
        productName : { "$regex": `.*${ payload }.*` } 
    };

    const count    = await Product.countDocuments( query );
    const products = await Product.find(query).exec();

    return {
        count,
        products
    };
}