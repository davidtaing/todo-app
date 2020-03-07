import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import DeleteTaskButton from './DeleteTaskButton'

const Task = ({ data, onDeleteTaskClick }) => {
    const [value] = useState(data.title || "Add a title for this task.");
    const [complete, setComplete] = useState(false);
    
    const onCheckboxClick = (e) => {setComplete(! complete)};

    return (
        <div key={data._id}>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for task" onClick={onCheckboxClick} />
                </InputGroup.Prepend>
                <FormControl aria-label="Text input with checkbox" defaultValue={value} />
                { complete ? (<DeleteTaskButton taskId={data._id} onDeleteTaskClick={onDeleteTaskClick}/>) : null}
            </InputGroup>
        </div>
    );
}

export default Task;