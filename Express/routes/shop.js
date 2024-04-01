const express = require('express')
const Product = require('../models/product')
const router = express.Router();


router.get("/products", (req, res, next)=>{
    const product = Product.findAll();
    res.status(200).json({product})
})

module.exports = router