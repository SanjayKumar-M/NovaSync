import expressAsyncHandler from "express-async-handler";
import { Agenda, Reminder } from "../model/taskModel.js";

const task = expressAsyncHandler(async (req, res) => {
    try {
        const { agenda, mode, location, description, date, time, reminder } = req.body;

        if (agenda) {
            // Create an agenda
            const newAgenda = await Agenda.create({
                agenda, mode, location, description, date, time
            });

            if (newAgenda) {
                res.status(201).json({ message: `Your Agenda scheduled successfully on ${newAgenda.date}` });
            } else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
        } else if (reminder) {
            // Create a reminder
            const newReminder = await Reminder.create({
                reminder, description, date, time
            });

            if (newReminder) {
                res.status(201).json({ message: `Your Reminder scheduled successfully on ${newReminder.date} at ${newReminder.time}` });
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
