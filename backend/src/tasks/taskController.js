import mongoose, { Query } from 'mongoose';

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

export const updateTask  = (req, res) => {
    const options = { new: true };

    Task.findByIdAndUpdate(req.body._id, req.body, options, (err, Task) => {
        if (err) {
            res.send(err);
        }

        res.json(Task);
    })
}

export const deleteTask = (req, res) => {
    Task.findByIdAndDelete(req.body._id, (err, Task) => {
        if (err) {
            res.send(err);
        }

        res.json(Task);
    })
}