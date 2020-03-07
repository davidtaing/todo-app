import React from 'react';
import Button from 'react-bootstrap/Button';

const AddTaskButton = ({ onClick }) => {
    return (
        <Button variant="light" size="lg" onClick={onClick} block>
            Add Task
        </Button>
    );
}

export default AddTaskButton;