const mongoose = require('mongoose');

// 1- create schema
const brandSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Brand required"],
            unique: [true, "Brand must be unique"],
            minlength:[3, "Brand must be at least 3 characters long"],
            maxlength:[32, "Brand must be at most 32 characters long"],
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
const BrandModel = mongoose.model('Brand', brandSchema)

module.exports = BrandModel;   