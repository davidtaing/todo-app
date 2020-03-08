import React from 'react';
import Button from 'react-bootstrap/Button';

const AddTaskButton = ({ onAddTaskClick }) => {
    return (
        <Button variant="light" size="lg" onClick={onAddTaskClick} block>
            Add Task
        </Button>
    );
}

export default AddTaskButton;