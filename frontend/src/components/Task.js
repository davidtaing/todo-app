import React from 'react';
import Card from 'react-bootstrap/Card';

import DeleteTaskButton from './DeleteTaskButton'

const Task = ({ data, onTaskChecked, onDeleteTaskClick }) => {
    const titleText = (data.title || "Add a title for this task.");

    return (
        <div key={data._id}>
            <Card bg="secondary" text="white" >
                <Card.Body>
                    <Card.Title>{titleText}</Card.Title>
                    <Card.Text>{data.desc}</Card.Text>
                    { !data.complete ? (<DeleteTaskButton taskId={data._id} onDeleteTaskClick={onDeleteTaskClick}/>) : null}
                </Card.Body>
            </Card>
        </div>
    );
}

export default Task;