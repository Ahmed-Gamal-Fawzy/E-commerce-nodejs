const mongoose = require('mongoose');

const subCategorySchema=new mongoose.Schema({
        name:{
            type:String,
            trim : true,
            unique:[true, "SubCategory must be unique"],
            minlength:[3, "SubCategory must be at least 3 characters long"],
            maxlength:[32, "SubCategory must be at most 32 characters long"],
        },
        slug:{
            type:String,
            lowercase:true
        },
        category:{
            type: mongoose.Schema.ObjectId,
            ref: 'Category',
            required: [true, "SubCategory must belong to a category"]
        }
    
},{timestamps: true})

module.exports = mongoose.model('SubCategory', subCategorySchema)


