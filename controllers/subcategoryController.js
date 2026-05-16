const slugify = require('slugify');
const asyncHandler = require('express-async-handler');
const ApiError = require('../utils/apiError');

const SubCategory = require('../models/subCategoryModel');


//@desc create subcategory
//@route post /api/v1/subcategories
//@access Private
exports.createSubCategory = asyncHandler(async (req, res) => {
    const { name, category } = req.body;
    const subCategory = await SubCategory.create({  
        name, 
        slug: slugify(name), 
        category 
    });
    res.status(201).json({ data: subCategory });
});

// @desc get all subcategories
// @route GET api/v1/subcategories
// @access Public
exports.getSubCategories = asyncHandler(async (req,res)=>{
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 2;
    const skip = (page - 1) * limit;
    const subCategories = await SubCategory.find().skip(skip).limit(limit);
    res.status(200).json({results :subCategories.length, page, data:subCategories});
})

// @desc get specific subcategory
// @route GET api/v1/subcategories/:id
// @access Public
exports.getSubCategory = asyncHandler(async (req,res,next) =>{
    const {id} = req.params;
    const subCategory= await SubCategory.findById(id);
    if(!subCategory){
        return next(new ApiError(`No SubCategory For This Id : ${id}`, 404));
    }
    res.status(200).json({data:subCategory});
})





