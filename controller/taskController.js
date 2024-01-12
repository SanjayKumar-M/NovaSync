import expressAsyncHandler from "express-async-handler";
import { Agenda, Reminder } from "../model/taskModel.js";
import { currentUser } from "./userController.js";
import { emailNotification } from "../notifications/emailNotification.js";

const task = expressAsyncHandler(async (req, res) => {
    try {
        const { agenda, mode, location, description, date, time, reminder } = req.body;

        if (agenda) {
            const newAgenda = await Agenda.create({
                agenda, mode, location, description, date, time
            });

            if (newAgenda) {
                await emailNotification(
                    req.currentUser.email,  // Corrected: Use currentUser.email to get the user's email
                    `Your agenda scheduled successfully`, 
                    `${newAgenda.agenda} scheduled on ${newAgenda.date}`
                );
                res.status(201).json({ message: `Your Agenda scheduled successfully on ${newAgenda.date}` });
            } else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
        } else if (reminder) {
            const newReminder = await Reminder.create({
                reminder, description, date, time
            });

            if (newReminder) {
                await emailNotification(currentUser.email, `Your Reminder scheduled successfully`, `${newReminder.reminder} scheduled on ${newReminder.date}`);
                res.status(201).json({ message: `Your Reminder scheduled successfully on ${newReminder.date} ` });
            } else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
        } else {
            res.status(400).json({ message: 'Invalid task data' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default task;
