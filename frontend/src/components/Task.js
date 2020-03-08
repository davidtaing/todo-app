import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import DeleteTaskButton from './DeleteTaskButton'

const Task = ({ data, onTaskChecked, onDeleteTaskClick }) => {
    const titleText = (data.title || "Add a title for this task.");

    return (
        <div key={data._id}>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for task" onClick={(e) => onTaskChecked(e, data)} />
                </InputGroup.Prepend>
                <FormControl placeholder={titleText} disabled={data.complete} aria-label="Text input with checkbox" />
                { data.complete ? (<DeleteTaskButton taskId={data._id} onDeleteTaskClick={onDeleteTaskClick}/>) : null}
            </InputGroup>
        </div>
    );
}

export default Task;