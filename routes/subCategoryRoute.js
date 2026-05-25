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

// mergeparams: Allow us to access parameters on other routers
// ex: we need to access categoryId from category router 
const router = express.Router({mergeParams:true});

router.route('/')
    .post(createSubCategoryValidator, createSubCategory)
    .get(getSubCategories);
router.route('/:id')
    .get(getSubCategoryValidator, getSubCategory)
    .put(updateSubCategoryValidator, updateSubCategory)
    .delete(deleteSubCategoryValidator, deleteSubCategory);

module.exports = router;
