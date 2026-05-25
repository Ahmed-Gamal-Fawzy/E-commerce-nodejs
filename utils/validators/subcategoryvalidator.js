const {param, check} = require('express-validator');
const validatorMiddleware = require('../../middlewares/validatorMiddleware');

exports.getSubCategoryValidator = [
    param('id')
    .isMongoId()
    .withMessage("invalid subcategory id format"),
    validatorMiddleware,
];


exports.createSubCategoryValidator=[
    check("name")
        .notEmpty()
        .withMessage("SubCategory name is required")
        .isLength({min:2})
        .withMessage("SubCategory name must be at least 3 characters long")
        .isLength({max:32})
        .withMessage("SubCategory name must be at most 32 characters long"),
    check("category")
        .notEmpty()
        .withMessage("SubCategory category is required")
        .isMongoId()
        .withMessage("SubCategory category must be a valid MongoDB ObjectId"),
    validatorMiddleware,        
];



exports.updateSubCategoryValidator = [
    param('id').isMongoId().withMessage("invalid subcategory id format"),
    validatorMiddleware,
];

exports.deleteSubCategoryValidator = [
    param('id').isMongoId().withMessage("invalid subcategory id format"),
    validatorMiddleware,
];
