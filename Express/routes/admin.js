const express = require('express');
const Product = require('../models/product');
const router = express.Router();

router.post("/add-product", (req, res, next) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
    });

    console.log("works?");
    // Assuming save() method exists in your Product model
    product.save()
        .then(() => {
            res.status(200).json({ message: "Product added successfully" });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

router.delete('/delete-product', (req, res, next) => {
    // Implementation for deleting a product
});

module.exports = router;
