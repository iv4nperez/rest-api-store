"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = require("../controllers/product");
const router = (0, express_1.Router)();
router.get('/', product_1.loadProducts);
router.get('/:search', product_1.searchProductByName);
router.post('/', product_1.saveProductPost);
exports.default = router;
//# sourceMappingURL=product.js.map