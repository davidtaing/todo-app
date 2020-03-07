import React from 'react';
import Task from './Task'

const TaskList = ({ tasks, onDeleteTaskClick }) => {
    return (
        <div className="taskList">
            { tasks.map((task) => (<Task data={task} onDeleteTaskClick={onDeleteTaskClick}/>)) }
        </div>
    );
};

export default TaskList;