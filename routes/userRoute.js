import { Router } from "express";
import { login, register } from "../controller/userController.js";

const userRoute= Router();

userRoute.post('/register',register)
userRoute.post('/login',login)


export default userRoute;