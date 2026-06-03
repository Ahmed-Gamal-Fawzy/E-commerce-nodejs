const express=require('express');
const {
    getBrandValidator,
    createBrandValidator,
    updateBrandValidator,
    deleteBrandValidator
} = require('../utils/validators/brandvalidator');
    

const { getBrands, 
        createBrand, 
        getBrand, 
        updateBrand, 
        deleteBrand 
    } = require('../controllers/brandController');

const router= express.Router();

router.route('/')
    .get(getBrands)
    .post(createBrandValidator,createBrand);

router.route('/:id')
    .get(getBrandValidator,getBrand)
    .put(updateBrandValidator,updateBrand)
    .delete(deleteBrandValidator,deleteBrand);



module.exports=router;