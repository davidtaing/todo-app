import express from 'express';

import { addTask, getTasks, deleteTask } from '../tasks/taskController';

const router = express.Router();

router.route('/')
    .get(getTasks)
    .post(addTask)
    .put((req, res) => {
        res.json("Updated task");
    })
    .delete(deleteTask)

module.exports = router;