import mongoose from 'mongoose';

import { TaskSchema } from './taskModel.js';

const Task = mongoose.model('Task', TaskSchema);

export const getTasks = (req, res) => {
    Task.find({}, (err, Task) => {
        if (err) {
            res.send(err);
        }

        res.json(Task);
    })
}

export const addTask = (req, res) => {
    const task = new Task(req.body);

    task.save((err, Task) => {
        if (err) {
            res.send(err);
        }

        res.json(Task);
    })
}