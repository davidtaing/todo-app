import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const Task = ({ data }) => {
    return (
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for task" />
                </InputGroup.Prepend>
                <FormControl aria-label="Text input with checkbox" defaultValue={data.title} />
            </InputGroup>
        </div>
    );
}

export default Task;