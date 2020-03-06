import express from 'express';

import { addTask, getTasks } from '../tasks/taskController';

const router = express.Router();

router.route('/')
    .get(getTasks)
    .post(addTask)
    .put((req, res) => {
        res.json("Updated task");
    })
    .delete((req, res) => {
        res.json("Deleted task");
    })

module.exports = router;