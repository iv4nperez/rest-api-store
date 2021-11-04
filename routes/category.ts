import { Router } from 'express'
import { check } from 'express-validator'
import { getCategories, saveCategories } from '../controllers/category';
import { isCategoryValid } from '../helpers/validator'

const router = Router();

router.post('/',[
    check('name').custom( isCategoryValid ), 
],saveCategories );

router.get('/', getCategories)


export default router;