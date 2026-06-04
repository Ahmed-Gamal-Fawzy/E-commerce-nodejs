const mongoose=require('mongoose');

const productSchema=new mongoose.Schema(
    {
        title: {
            type:String,
            required:true,
            trim:true,
            minlength:[3,'Product title must be more than 3 characters'],
            maxlength:[100,'Product title must be less than 100 characters']
        },
        slug:{
            type:String,
            required:true,
            lowercase:true
        },
        description:{
            type:String,
            required:[true,'Product description is required'],
            minlength:[10,'Product description must be more than 10 characters'],
        },
        quantity:{
            type:Number,
            required:[true,'Product quantity is required']
        },
        sold:{
            type:Number,
            default:0
        },
        price:{
            type:Number,
            required:[true,'Product price is required'],
            trim:true,
            maxlength:[20,'Product price must be less than 20 characters']
        },
        priceAfterDiscount:{
            type:Number,
            trim:true,
            maxlength:[20,'Product price after discount must be less than 20 characters']
        },
        colors:[String],
        imagecover:{
            type:String,
            required:[true,'Product image cover is required']
        },
        images:[String],
        category:{
            type:mongoose.Schema.ObjectId,
            ref:'Category',
            required:[true,'Product category is required']
        },
        subcategory:[{
            type:mongoose.Schema.ObjectId,
            ref:'SubCategory'
        }],
        brand:{
            type:mongoose.Schema.ObjectId,
            ref:'Brand',
        },
        ratingsAverage:{
            type:Number,
            min:[1,'Rating average must be at least 1'],
            max:[5,'Rating average must be at most 5']
        },
        ratingsQuantity:{
            type:Number,
            default:0
        }
    },
{timestamps: true})

module.exports=mongoose.model('Product',productSchema)