import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import DeleteTaskButton from './DeleteTaskButton'

const Task = ({ data, onTaskChecked, onDeleteTaskClick }) => {
    const titleText = (data.title || "Add a title for this task.");
    const descText = (data.desc || "Add a quick summary.")

    return (
        <div key={data._id}>
            <Card bg="secondary" text="white" >
                <Card.Body>
                    <Card.Title as={TaskTitle}>{titleText}</Card.Title>
                    <Card.Text >{descText}</Card.Text>
                    {<EditTaskButton />}
                    {!data.complete ? (<DeleteTaskButton taskId={data._id} onDeleteTaskClick={onDeleteTaskClick} />) : null}
                </Card.Body>
            </Card>
        </div>
    );
}

const TaskTitle = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
}

const EditTaskButton = (onClick) => {
    return (
        <Button onClick={onClick}>Edit</Button>
    );
}

export default Task;