import React, { useContext, Fragment } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import { DispatchContext } from '../App';
import { toggleTask } from '../actions/taskActions';

const TaskListRow = ({ data }) => {
    const dispatch = useContext(DispatchContext);
    
    return (
        <ListGroup.Item variant='light'>
            <div className="TaskListRow" >
                <input type="checkbox" onChange={() => dispatch(toggleTask(data._id))} />
                {data.completed === false ?
                    (<label>{data.title}</label>) :
                    (
                        <Fragment>
                            <label><s>{data.title}</s></label>
                            <Button variant="danger" size="sm" style={{float: "right"}}>Delete</Button>
                        </Fragment>
                    )
                }
            </div>
        </ListGroup.Item>
    );
}

export default TaskListRow;