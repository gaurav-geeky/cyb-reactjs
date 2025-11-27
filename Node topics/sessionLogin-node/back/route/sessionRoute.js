const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../model/User.js");

// Register
router.post("/register", async (req, res) => {
    console.log("Registeration detail : ", req.body);

    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.json({ msg: "All fields are required !" });
        }
        const exist = await User.findOne({ email });
        if (exist) return res.json({ msg: "Email already exists !" });

        const hashpass = await bcrypt.hash(password, 10);
        const newuser = await User.create({
            name, email, password: hashpass
        });

        res.json({ user: newuser, msg: "User has been Registered !" });

    } catch (err) {
        res.json({ error: err.message });
    }
});


// router.post("/register", async (req, res) => {
//     let { name, email, password } = req.body;
//     const exist = await User.findOne({ email });
//     if (exist) return res.json({ msg: "Email already exists" });

//     password = await bcrypt.hash(password, 10);
//     await User.create({ name, email, password });
//     res.json({ msg: "Account created" });
// });


// Login
router.post("/login", async (req, res) => {
    console.log("Login detail : ", req.body)

    try {
        const { password, email } = req.body;

        const myUser = await User.findOne({ email });
        if (!myUser) return res.json({ msg: "Invalid user email" });

        const checkpass = await bcrypt.compare(password, myUser.password);
        if (!checkpass) return res.json({ msg: "Invalid user password" });

        req.session.user = {
            id: myUser._id,
            name: myUser.name,
            email: myUser.email
        };
        const user = myUser.toObject();
        delete user.password;

        res.json({ msg: "User login success !", user });
    }
    catch (err) {
        res.json({ err: err.message })
    }
})

// router.post("/login", async (req, res) => {
//     let { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) return res.json({ msg: "User not found" });

//     const valid = await bcrypt.compare(password, user.password);
//     if (!valid) return res.json({ msg: "Wrong Password" });

//     req.session.user = user;
//     res.json({ msg: "Login success", user });
// });

// Dashboard
router.get("/dashboard", (req, res) => {
    if(req.session.user) return res.json({msg: ""})
})

// router.get("/dashboard", (req, res) => {
//     if (req.session.user) return res.json({ msg: "Welcome", user: req.session.user });
//     else return res.json({ msg: "Not logged in" });
// });

// Logout
router.get("/logout", (req, res) => {
    req.session.destroy();
    res.json({ msg: "Logged out" });
});

module.exports = router;

