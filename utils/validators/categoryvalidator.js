const {param} = require('express-validator');
const validatorMiddleware = require('../../middlewares/validatorMiddleware');

exports.getCategoryValidator = [
    param('id').isMongoId().withMessage("invalid id"),
    validatorMiddleware,
];

