import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


import { DispatchContext } from '../App';
import { toggleTask } from '../actions/taskActions';

import DeleteButton from './DeleteButton';

const TaskListRow = ({ data }) => {
    const dispatch = useContext(DispatchContext);

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
                        onBlur={() => console.log("title changed")}
                        disabled={data.completed ? true : false} />
                    { data.completed &&
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
