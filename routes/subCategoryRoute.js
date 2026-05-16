const express=require('express');
const {createSubCategoryValidator, 
    getSubCategoryValidator
    } = require('../utils/validators/subcategoryvalidator');
const {
    createSubCategory,
    getSubCategories,
    getSubCategory,
} = require('../controllers/subcategoryController');

const router = express.Router();

router.route('/')
    .post(createSubCategoryValidator, createSubCategory)
    .get(getSubCategories);
router.route('/:id')
    .get(getSubCategoryValidator, getSubCategory);

module.exports = router;
