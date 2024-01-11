import expressAsyncHandler from "express-async-handler";

import bcrypt from 'bcrypt'
import User from "../model/userModel.js";
import jwt from 'jsonwebtoken';
const register = expressAsyncHandler(async (req, res) => {


    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(400).send("All fields are required")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({
        username,
        email,
        password: hashedPassword
    }).catch(error => {
        console.error('Error creating user:', error);
    });


    if (newUser) {
        res.status(201).json({ message: "User Created Successfully", email: newUser.email })

    }
    else {
        res.status(400);
    }


})

const login = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
    }

    const user = await User.findOne({ where: { email } });

    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                },
            },
            "thetokensecret",
            { expiresIn: "20m" }
        );

        return res.status(200).json({ accessToken });
    } else {
        return res.status(401).json({ message: "Invalid email or password." });
    }
});


const currentUser = expressAsyncHandler(async (req, res) => {
    res.json(req.user);
  });

export { register, login ,currentUser};