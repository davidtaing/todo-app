import React from 'react';
import Task from './Task';


const TaskList = ({ tasks, onTaskChecked, onDeleteTaskClick }) => {
    return (
        <div className="taskList">
            { tasks.map((task) => (<Task data={task} onTaskChecked={onTaskChecked} onDeleteTaskClick={onDeleteTaskClick}/>)) }
        </div>
    );
};

export default TaskList;