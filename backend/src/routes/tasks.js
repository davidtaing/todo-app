import express from 'express';

import { addTask } from '../tasks/taskController';

const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.json("Got all tasks");
    })
    .post(addTask)
    .put((req, res) => {
        res.json("Updated task");
    })
    .delete((req, res) => {
        res.json("Deleted task");
    })

module.exports = router;