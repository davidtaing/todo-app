import React from 'react';

const MainMenu = ({onAddClick}) => {
    return (
        <ul style={{ "list-style-type": "none" }}>
            <li><h1>Menu</h1></li>
            <li onClick={onAddClick}><p>Add Task</p></li>
        </ul>
    )
}

export default MainMenu;