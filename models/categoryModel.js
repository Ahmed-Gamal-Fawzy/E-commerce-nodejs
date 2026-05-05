const mongoose = require('mongoose');

// 1- create schema
const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Category required"],
            unique: [true, "Category must be unique"],
            minlength:[3, "Category must be at least 3 characters long"],
            maxlength:[32, "Category must be at most 32 characters long"],
        },
        slug:{
            type: String,
            lowercase: true,   
        },
        image : String,
        
    },
    {timestamps: true}  // to add createdAt and updatedAt
) 

// 2- create model
const CategoryModel = mongoose.model('Category', categorySchema)

module.exports = CategoryModel;   