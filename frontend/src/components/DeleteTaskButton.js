import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const DeleteTaskButton = ({ taskId, onDeleteTaskClick }) => {
    return (
        <InputGroup.Append>
            <Button 
                variant="outline-danger" 
                onClick={ () => onDeleteTaskClick(taskId) }
            >Delete</Button>
        </InputGroup.Append>
    );
}

export default DeleteTaskButton;