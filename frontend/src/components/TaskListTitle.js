import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const TaskListTitle = ({text}) => {
    return (
        <ListGroup.Item variant='dark'>
            <div className="TaskListTitle">
                <h2>{text}</h2>
            </div>
        </ListGroup.Item>
  );
}

export default TaskListTitle;