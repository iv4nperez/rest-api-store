import { Router } from "express";

import { loadProducts, saveProductPost } from "../controllers/product";

const router = Router();

router.get('/', loadProducts );
router.post('/', saveProductPost );



export default router;