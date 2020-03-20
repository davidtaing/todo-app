import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';

import { DispatchContext } from '../App';
import { deleteTask } from '../actions/taskActions';

const DeleteButton = ({_id}) => {
    const dispatch = useContext(DispatchContext);

    return (
        <Button
            variant="danger"
            size="sm"
            style={{ float: "right" }}
            onClick={() => dispatch(deleteTask(_id))}>
            Delete</Button>
    );
}

export default DeleteButton;