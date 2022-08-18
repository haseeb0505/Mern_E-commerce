const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// register user
router.post("/register", async (req, res) => {
    const saltRounds = 10;
    const hash = await bcrypt.hash(req.body.password, saltRounds);
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash
    })

    try {
        let response = await newUser.save();
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json(error);
    }

})

router.post("/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {

        const user = await User.findOne({ username: username });
        if (!user) {
            res.status(400).json({ message: "User not found" });
        } else {
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: "3d" });

                let { password, ...info } = user._doc;

                res.status(200).json({ message: "Login success", data: { ...info, accessToken } });
            } else {
                res.status(400).json({ message: "Password not match" });
            }
        }
    } catch (error) {
        res.status(500).json(error);
    }

})

module.exports = router;