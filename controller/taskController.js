import expressAsyncHandler from "express-async-handler";
import { Agenda, Reminder } from "../model/taskModel.js";
import { currentUser } from "./userController.js";
import { emailNotification } from "../notifications/emailNotification.js";
import schedule from 'node-schedule'

const task = expressAsyncHandler(async (req, res) => {
    try {
        const { agenda, mode, location, description, date, time, reminder } = req.body;

        if (agenda) {
            const newAgenda = await Agenda.create({
                agenda, mode, location, description, date, time
            });

            if (newAgenda) {
                await emailNotification(
                    req.currentUser.email, 
                    `Your agenda scheduled successfully`, 
                    `${newAgenda.agenda} scheduled on ${newAgenda.date}`
                );
                const scheduledTime = new Date(`${newAgenda.date} ${newAgenda.time}`);
                schedule.scheduleJob(scheduledTime, async () => {
                    await emailNotification(
                        req.currentUser.email,
                        `It's time to go`,
                        `Hey ${req.currentUser.username} now it's time to attend ${newAgenda.agenda} ,Here is your description ${newAgenda.description}`
                    );
                });

                res.status(201).json({ message: `Your Agenda scheduled successfully on ${newAgenda.date}` });
            } else {
                res.status(500).json({ message: 'Internal Server Error' });
            }
        } else if (reminder) {
            const newReminder = await Reminder.create({
                reminder, description, date, time
            });

            if (newReminder) {
                await emailNotification(currentUser.email, `Your Reminder set successfully`, `${newReminder.reminder} scheduled on ${newReminder.date}`);

                const scheduledTime = new Date(`${newReminder.date} ${newReminder.time}`);
                
                schedule.scheduleJob(scheduledTime, async () => {
                    await emailNotification(
                        req.currentUser.email,
                        `It's time to go`,
                        `Hey ${req.currentUser.username} now it's time to attend ${newReminder.agenda} ,Here is your description ${newReminder.description}`
                    );
                });
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
