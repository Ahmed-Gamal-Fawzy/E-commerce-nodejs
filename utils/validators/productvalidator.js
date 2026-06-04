const { check } = require('express-validator');
const validatorMiddleware = require('../../middlewares/validatorMiddleware');


exports.createProductValidator=[
    check('title')
        .isLength({ min: 3 })
        .withMessage('Product title must be at least 3 characters')
        .notEmpty()
        .withMessage('Product title is required'),
    check('description')
        .notEmpty()
        .withMessage('Product description is required')
        .isLength({ max: 2000 })
        .withMessage('Too long Description'),
    check('quantity')
        .notEmpty()
        .withMessage('Product quantity is required')
        .isNumeric()
        .withMessage('Product quantity must be a number'),
    check('sold')
        .optional()
        .isNumeric()
        .withMessage('Product sold must be a number'),
    check('price')
        .notEmpty()
        .withMessage('Product price is required')
        .isNumeric()
        .withMessage('Product price must be a number')
        .isLength({ max: 32 })
        .withMessage('too long price'),
    check('priceAfterDiscount')
        .optional()
        .toFloat()
        .isNumeric()
        .withMessage('Product price after discount must be a number')
        .custom((value, { req }) => {
            if (value >= req.body.price) {
                throw new Error('Product price after discount must be less than product price');
            }
            return true;
        }),
    check('availableColors')
        .optional()
        .isArray()
        .withMessage('Product available colors must be an array'),
    check('imagecover')
        .notEmpty()
        .withMessage('Product image cover is required'),
    check('images')
        .optional()
        .isArray()
        .withMessage('Product images must be an array'),
    check('category')
        .notEmpty()
        .withMessage('Product category is required')
        .isMongoId()
        .withMessage('Invalid category id format'),
    check('subcategory')
        .optional()
        .isMongoId()
        .withMessage('Invalid subcategory id format'),
    check('brand')
        .optional()
        .isMongoId()
        .withMessage('Invalid brand id format'),
    check('ratingsAverage')
        .optional()
        .isNumeric()
        .withMessage('Product ratings average must be a number')
        .isLength({ min: 1 })
        .withMessage('Ratings must be above or equal 1.0')
        .isLength({ max: 5 })
        .withMessage('Ratings must be below or equal 5.0'),
    check('ratingsQuantity')
        .optional()
        .isNumeric()
        .withMessage('Product ratings quantity must be a number'),

    validatorMiddleware
];

exports.getProductValidator = [
    check('id').isMongoId().withMessage('Invalid product id format'),
    validatorMiddleware
];


exports.updateProductValidator = [
    check('id').isMongoId().withMessage('Invalid product id format'),
    validatorMiddleware
];

exports.deleteProductValidator = [
    check('id').isMongoId().withMessage('Invalid product id format'),
    validatorMiddleware
];
