// userController.js

import expressAsyncHandler from "express-async-handler";
import bcrypt from 'bcrypt';
import User from "../model/userModel.js";
import jwt from 'jsonwebtoken';

const register = expressAsyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).send("All fields are required");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword
        });

        if (newUser) {
            return res.status(201).json({ message: "User Created Successfully", email: newUser.email });
        } else {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

const login = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
    }

    try {
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
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

const currentUser = expressAsyncHandler(async (req, res, next) => {
    try {
        // Extract user information from the request (you might need to adapt this based on your authentication setup)
        const user = req.user;

        if (user) {
            // Attach user information to the request
            req.currentUser = user;
            next(); // Call next to pass control to the next middleware or route handler
        } else {
            res.status(401).json({ message: 'User not authenticated' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


export { register, login, currentUser };
