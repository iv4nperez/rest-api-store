"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const category_1 = require("../controllers/category");
const validator_1 = require("../helpers/validator");
const router = (0, express_1.Router)();
router.post('/', [
    (0, express_validator_1.check)('name').custom(validator_1.isCategoryValid),
], category_1.saveCategories);
router.get('/', category_1.getCategories);
exports.default = router;
//# sourceMappingURL=category.js.map