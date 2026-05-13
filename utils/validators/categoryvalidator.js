const {param, check} = require('express-validator');
const validatorMiddleware = require('../../middlewares/validatorMiddleware');

exports.getCategoryValidator = [
    param('id').isMongoId().withMessage("invalid category id format"),
    validatorMiddleware,
];

exports.createCategoryValidator=[
    check("name").notEmpty()
    .withMessage("Category name is required")
    .isLength({min:3})
    .withMessage("Category name must be at least 3 characters long")
    .isLength({max:32})
    .withMessage("Category name must be at most 32 characters long"),
    validatorMiddleware,       
];

exports.updateCategoryValidator = [
    param('id').isMongoId().withMessage("invalid category id format"),
    validatorMiddleware,
];

exports.deleteCategoryValidator = [
    param('id').isMongoId().withMessage("invalid category id format"),
    validatorMiddleware,
];
