import React, { useContext, Fragment } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import { DispatchContext } from '../App';
import { toggleTask } from '../actions/taskActions';

import DeleteButton from './DeleteButton';

const TaskListRow = ({ data }) => {
    const dispatch = useContext(DispatchContext);

    return (
        <ListGroup.Item variant='light' key={data._id}>
            <div className="TaskListRow" >
                <input type="checkbox" onChange={() => dispatch(toggleTask(data._id))} />
                {data.completed === false ?
                    (<label>{data.title}</label>) :
                    (
                        <Fragment>
                            <label><s>{data.title}</s></label>
                            <DeleteButton _id={data._id}></DeleteButton>
                        </Fragment>
                    )
                }
            </div>
        </ListGroup.Item>
    );
}

export default TaskListRow;