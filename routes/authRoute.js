import express from "express";
const router = express.Router();
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
// import CryptoJS from "crypto-js";

//Register

router.post("/register", async (req, res) => {

    try {
        const { user_fname, user_lname, user_email, user_password } = req.body;
        const newUser = new userModel({
            user_fname,
            user_lname,
            user_email,
            user_password,

        });

        //FOR PASSWORD ENCRYPTION

        // const { user_fname, user_lname, user_email } = req.body;
        // const newUser = new userModel({
        //     user_fname,
        //     user_lname,
        //     user_email,
        //     user_password: CryptoJS.AES.encrypt(req.body.user_password, process.env.PASS_SEC).toString(),

        // });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json(error);
    }

})

//LOGIN

router.post("/login", async (req, res) => {
    try {
        const user = await userModel.findOne({ user_email: req.body.user_email });

        if (!user) {
            return res.status(401).json("Invalid email or password");
        }

        if (user.user_password === req.body.user_password) {

            const accessToken = jwt.sign(
                {
                    id: user._id,
                },
                process.env.JWT_SECRET, // Use the correct environment variable for your JWT secret
                { expiresIn: "1d" }
            );

            // Include the token in the response
            res.status(200).json({ success: true, user, accessToken });
        } else {
            res.status(401).json("Invalid email or password");
        }

    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error });
    }
    console.log(first)
});

export default router