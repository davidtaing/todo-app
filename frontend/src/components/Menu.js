import React from 'react';
import GroupMenu from './GroupMenu';

const Menu = () => {
    return (
        <div>
            <ul style={{ "list-style-type": "none" }}>
                <li><h1>Menu</h1></li>
                <li><p>Add Task</p></li>
            </ul>
            <br />
            <GroupMenu />
        </div>
    );
}

export default Menu;