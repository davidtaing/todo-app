import express from 'express';

import { addTask, getTasks, deleteTask, updateTask } from '../tasks/taskController';

const router = express.Router();

router.route('/')
    .get(getTasks)
    .post(addTask)
    .put(updateTask)
    .delete(deleteTask)

module.exports = router;