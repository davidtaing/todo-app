import React from 'react';
import Task from './Task'

const TaskList = ({ tasks }) => {
    return (
        <div className="taskList">
            { tasks.map((task) => (<Task data={task}/>)) }
        </div>
    );
};

export default TaskList;