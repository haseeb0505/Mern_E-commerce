const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcrypt');

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


module.exports = router;