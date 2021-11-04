import Category from '../models/category'

export const isCategoryValid = async ( typeName = '' ) => {
    // console.log(name)
    console.log(typeName)
    const existCategory = await Category.findOne({ typeName })
    
    if( !existCategory ){
        throw new Error(`La categoria ${ typeName } no esta registrado en la DB.`)
    }
}



