import express from 'express'

import task from "../controller/taskController.js";
import validateToken from '../middlewares/validation.js';
import { currentUser } from '../controller/userController.js';

const taskRoute = express.Router()


taskRoute.post('/task',validateToken,currentUser, task); 

export default taskRoute