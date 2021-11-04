import Product from "../models/product";
import { IProduct } from '../interfaces'
import { Response } from "../helpers/Response";


export const saveProduct = async ( payload: IProduct ) : Promise<Response> => {
    
    try {
        

        const product = new Product( payload );
        await product.save();

        return new Response(product, 0, true);
    } catch (error) {
        return new Response({}, 0, false);
    }
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

export const getProductByCategoryTypeName = async ( payload: string ) : Promise<Response> => {

    try {
        let query: any = {
            status: true,
            category: payload
        }
    
        const count     = await Product.countDocuments( query ).limit( 3 );
        const products  = await Product.find( query ).limit( 3 ).exec();
        return new Response(products, count, true);
    
    } catch (error) {

        return new Response([], 0, false);        
    }
}