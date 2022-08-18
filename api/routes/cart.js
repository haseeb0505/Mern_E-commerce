const Cart = require('../model/Cart');
const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } = require('./verifyToken');
const router = require('express').Router();


// Create cart
router.post("/", verifyToken, async (req, res) => {

    const newCart = new Cart(req.body)

    try {
        let savedCart = await newCart.save();
        res.status(201).json(savedCart);
    } catch (error) {
        res.status(500).json(error);
    }
})


// update cart 
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {

    try {
        const response = await Cart.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(response);

    } catch (error) {
        res.status(500).json(error);
    }
})


// delete cart
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "cart deleted" });
    } catch (error) {
        res.status(500).json(error);
    }

})




// Get user cart
router.get("/find/:id", async (req, res) => {
    try {
        let cart = await Cart.findOne({ userId: req.params.id });
        if (!cart) {
            res.status(400).json({ message: "cart not found" });
        } else {

            res.status(200).json(cart);
        }

    } catch (error) {
        res.status(500).json(error);
    }

})

// get all 
router.get("/", verifyTokenAndAdmin, async (req, res) => {

    try {
        let carts = await Cart.find();
        res.status(200).json(carts);
    } catch (error) {
        res.status(500).json(error);
    }


})





module.exports = router;