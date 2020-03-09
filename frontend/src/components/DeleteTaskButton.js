import React from "react";
import Button from 'react-bootstrap/Button';

const DeleteTaskButton = ({ taskId, onDeleteTaskClick }) => {
    return (
        <Button 
            variant="danger" 
            onClick={() => onDeleteTaskClick(taskId)}>
            Delete
        </Button>
    );
}

export default DeleteTaskButton;