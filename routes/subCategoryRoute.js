const express=require('express');
const {createSubCategoryValidator, 
    getSubCategoryValidator,
    updateSubCategoryValidator,
    deleteSubCategoryValidator
    } = require('../utils/validators/subcategoryvalidator');
const {
    createSubCategory,
    getSubCategories,
    getSubCategory,
    updateSubCategory,
    deleteSubCategory
} = require('../controllers/subcategoryController');

const router = express.Router();

router.route('/')
    .post(createSubCategoryValidator, createSubCategory)
    .get(getSubCategories);
router.route('/:id')
    .get(getSubCategoryValidator, getSubCategory)
    .put(updateSubCategoryValidator, updateSubCategory)
    .delete(deleteSubCategoryValidator, deleteSubCategory);

module.exports = router;
