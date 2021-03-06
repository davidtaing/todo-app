import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


import { DispatchContext } from '../App';
import { toggleTask, updateTask } from '../actions/taskActions';

import DeleteButton from '../components/Tasks/DeleteButton';

const TaskListRow = ({ data }) => {
    const dispatch = useContext(DispatchContext);
    const deleteBtnCond = (data.completed || data.title === '');

    return (
        <ListGroup.Item variant='light' key={data._id}>
            <div className="TaskListRow" >
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Checkbox onChange={() => dispatch(toggleTask(data._id))} />
                    </InputGroup.Prepend>
                    <FormControl
                        style={data.completed ? { "text-decoration": "line-through" } : null}
                        defaultValue={data.title}
                        placeholder="Enter a title for this task."
                        onBlur={(event) => dispatch(updateTask(data._id, event.target.value, data.desc, data.group, data.completed))}
                        disabled={data.completed ? true : false} />
                    { deleteBtnCond &&
                        (<InputGroup.Append>
                            <DeleteButton _id={data._id}></DeleteButton>
                        </InputGroup.Append>)
                    }
                </InputGroup>
            </div>
        </ListGroup.Item>
    );
}

export default TaskListRow;
