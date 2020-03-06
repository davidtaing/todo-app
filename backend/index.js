import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import tasks from './src/routes/tasks';

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/todoapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

// routing
app.use('/tasks', tasks);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});