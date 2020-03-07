import React from 'react';
import Button from 'react-bootstrap/Button';

const SaveToDbButton = ({onSaveToDBClick}) => {
    return (
        <Button alt="Save all changes to the database." onClick={onSaveToDBClick} >Save to Database</Button>
    )
}

export default SaveToDbButton;