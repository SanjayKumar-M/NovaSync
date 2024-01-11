import { Router } from "express";
import { currentUser, login, register } from "../controller/userController.js";
import validateToken from "../middlewares/validation.js";
const userRoute= Router();

userRoute.post('/register',register)
userRoute.post('/login',login)

userRoute.get('/current',validateToken,currentUser)

export default userRoute;