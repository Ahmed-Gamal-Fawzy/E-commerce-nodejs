const {param, check} = require('express-validator');
const validatorMiddleware = require('../../middlewares/validatorMiddleware');

exports.getBrandValidator = [
    param('id').isMongoId().withMessage("invalid brand id format"),
    validatorMiddleware,
];

exports.createBrandValidator=[
    check("name").notEmpty()
    .withMessage("Brand name is required")
    .isLength({min:3})
    .withMessage("Brand name must be at least 3 characters long")
    .isLength({max:32})
    .withMessage("Brand name must be at most 32 characters long"),
    validatorMiddleware,       
];

exports.updateBrandValidator = [
    param('id').isMongoId().withMessage("invalid brand id format"),
    validatorMiddleware,
];

exports.deleteBrandValidator = [
    param('id').isMongoId().withMessage("invalid brand id format"),
    validatorMiddleware,
];
