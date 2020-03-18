import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import { DispatchContext } from '../App';
import { toggleTask } from '../actions/taskActions';

const TaskListRow = ({data}) => {
    const dispatch = useContext(DispatchContext);

    return (
        <ListGroup.Item variant='light'>
            <div className="TaskListRow" >
                <input type="checkbox" onChange={() => dispatch(toggleTask(data._id))}/>
                <label>{data.title}</label>
            </div>
        </ListGroup.Item>
    );
}

export default TaskListRow;