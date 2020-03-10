import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const TaskListRow = ({data}) => {
    return (
        <ListGroup.Item variant='light'>
            <div className="TaskListRow" >
                <input type="checkbox" />
                <label>{data.title}</label>
            </div>
        </ListGroup.Item>
    );
}

export default TaskListRow;