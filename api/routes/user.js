const User = require('../model/User');
const bcrypt = require('bcrypt');
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

const router = require('express').Router();

// update user 
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
        const saltRounds = 10;
        const hash = await bcrypt.hash(req.body.password, saltRounds);
        req.body.password = hash;
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedUser);

    } catch (error) {
        res.status(500).json(error);
    }
})


// delete user
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "User deleted" });
    } catch (error) {
        res.status(500).json(error);
    }

})
// Get user
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        let user = await User.findById(req.params.id);
        if (!user) {
            res.status(400).json({ message: "User not found" });
        } else {
            let { password, ...info } = user._doc;
            res.status(200).json(info);
        }

    } catch (error) {
        res.status(500).json(error);
    }

})

// Get All user
router.get("/", verifyTokenAndAdmin, async (req, res) => {

    const query = req.query.new
    try {
        let users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();
        if (!users) {
            res.status(400).json({ message: "User not found" });
        } else {

            res.status(200).json(users);
        }

    } catch (error) {
        res.status(500).json(error);
    }

})

// get user stats
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    try {
        const stats = await User.aggregate([
            {
                $match: {
                    createdAt: { $gte: lastYear }
                }
            }, {
                $project: {
                    month: { $month: "$createdAt" }
                }
            }, {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 }
                }
            }
        ]);

        res.status(200).json(stats);

    } catch (error) {
        res.status(500).json(error);
    }

})


module.exports = router;