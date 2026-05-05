const slugify = require('slugify');
const asyncHandler = require('express-async-handler');
const CategoryModel = require('../models/categoryModel');

// @desc get all categories
// @route GET api/v1/categories
// @access Public
exports.getCategories = asyncHandler(async (req,res)=>{
    const categories = await CategoryModel.find();
    res.status(200).json({results:categories.length, data:categories});
})

// @desc create category
// @route POST api/v1/categories
// @access Private
exports.createCategory = asyncHandler(async (req,res) =>{
    const name = req.body.name;
    const category = await CategoryModel.create({name, slug:slugify(name)});
    res.status(201).json({data:category});
})