const express=require('express');
const {createSubCategoryValidator} = require('../utils/validators/subcategoryvalidator');
const {
    createSubCategory
} = require('../controllers/subcategoryController');

const router = express.Router();

router.route('/').post(createSubCategoryValidator, createSubCategory);

module.exports = router;
