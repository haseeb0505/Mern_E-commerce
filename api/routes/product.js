const Product = require('../model/Product');
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const router = require('express').Router();


// Create product
router.post("/", verifyTokenAndAdmin, async (req, res) => {

    const newProduct = new Product(req.body)

    try {
        let savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
})


// update product 
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {

    try {
        const response = await Product.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(response);

    } catch (error) {
        res.status(500).json(error);
    }
})


// delete Product
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Product deleted" });
    } catch (error) {
        res.status(500).json(error);
    }

})




// Get product by id
router.get("/find/:id", async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);
        if (!product) {
            res.status(400).json({ message: "product not found" });
        } else {

            res.status(200).json(product);
        }

    } catch (error) {
        res.status(500).json(error);
    }

})

// Get All product
router.get("/", async (req, res) => {

    const qNew = req.query.new
    const qCategory = req.query.category
    try {
        let products;
        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(10);
        } else if (qCategory) {
            products = await Product.find({ categories: { $in: [qCategory] } });
        } else {
            products = await Product.find();
        }

        if (!products) {
            res.status(400).json({ message: "products not found" });
        } else {

            res.status(200).json(products);
        }

    } catch (error) {
        res.status(500).json(error);
    }

})




module.exports = router;