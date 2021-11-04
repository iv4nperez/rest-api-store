"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const product_1 = require("../controllers/product");
const validator_1 = require("../helpers/validator");
const validate_Fields_1 = require("../middleware/validate-Fields");
const router = (0, express_1.Router)();
router.get('/', product_1.searchProductByName);
router.get('/search', product_1.getProductByCategory);
router.post('/', [
    (0, express_validator_1.check)('category').custom(validator_1.isCategoryValid),
    validate_Fields_1.validateField
], product_1.saveProductPost);
exports.default = router;
//# sourceMappingURL=product.js.map