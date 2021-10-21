import { Router } from "express";
import { loadProducts, saveProductPost, searchProductByName } from "../controllers/product";

const router = Router();

router.get('/', loadProducts );
router.get('/:search', searchProductByName)
router.post('/', saveProductPost );


export default router;