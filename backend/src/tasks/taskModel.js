import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TaskSchema = new Schema({
    added: { type: Date, default: Date.now() },
    title: String,
    desc: String,
    completed: { type: Boolean, default: false }
});