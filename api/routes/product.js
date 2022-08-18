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

    const query = req.query.new
    try {
        let products = query ? await Product.find().sort({ _id: -1 }).limit(5) : await Product.find();
        if (!products) {
            res.status(400).json({ message: "User not found" });
        } else {

            res.status(200).json(products);
        }

    } catch (error) {
        res.status(500).json(error);
    }

})

// // get user stats
// router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
//     const date = new Date();
//     const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
//     try {
//         const stats = await User.aggregate([
//             {
//                 $match: {
//                     createdAt: { $gte: lastYear }
//                 }
//             }, {
//                 $project: {
//                     month: { $month: "$createdAt" }
//                 }
//             }, {
//                 $group: {
//                     _id: "$month",
//                     total: { $sum: 1 }
//                 }
//             }
//         ]);

//         res.status(200).json(stats);

//     } catch (error) {
//         res.status(500).json(error);
//     }

// })


module.exports = router;