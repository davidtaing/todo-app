import express from 'express';

const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.json("Got all tasks");
    })
    .post((req, res) => {
        res.json("Added task");
    })
    .put((req, res) => {
        res.json("Updated task");
    })
    .delete((req, res) => {
        res.json("Deleted task");
    })

module.exports = router;