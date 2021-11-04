import { Router } from "express";
import { check } from 'express-validator'
import { getProductByCategory, saveProductPost, searchProductByName } from "../controllers/product";
import { isCategoryValid } from "../helpers/validator";
import { validateField } from "../middleware/validate-Fields";

const router = Router();


router.get('/', searchProductByName );

router.get('/search', getProductByCategory );

router.post('/',[
    check('category').custom( isCategoryValid ),
    validateField
], saveProductPost );


export default router;