import express from 'express'

import task from "../controller/taskController.js";

const taskRoute = express.Router()


taskRoute.post('/task', task); 

export default taskRoute