import { Router } from "express";
import { saveProductPost, searchProductByName } from "../controllers/product";

const router = Router();

router.get('/', searchProductByName );
router.post('/', saveProductPost );


export default router;