const Order = require('../model/Order');
const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } = require('./verifyToken');
const router = require('express').Router();


// Create order
router.post("/", verifyToken, async (req, res) => {

    const newOrder = new Order(req.body)

    try {
        let savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
})


// update order 
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {

    try {
        const response = await Order.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(response);

    } catch (error) {
        res.status(500).json(error);
    }
})


// delete Order
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Order deleted" });
    } catch (error) {
        res.status(500).json(error);
    }

})



// Get user Order
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        let order = await Order.findOne({ userId: req.params.id });
        if (!order) {
            res.status(400).json({ message: "Order not found" });
        } else {

            res.status(200).json(order);
        }

    } catch (error) {
        res.status(500).json(error);
    }

})

// get all 
router.get("/", verifyTokenAndAdmin, async (req, res) => {

    try {
        let orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error);
    }


})

// get monthly income
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
        const income = await Order.aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: previousMonth,
                    }
                }
            },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount"
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" }
                }
            }

        ])
        res.status(200).json(income);

    } catch (error) {
        res.status(500).json(error);
    }
})





module.exports = router;