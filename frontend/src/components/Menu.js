import React from 'react';

const Menu = () => {
    return (
        <div>
            <ul style={{ "list-style-type": "none" }}>
                <li><h1>Menu</h1></li>
                <li><p>Add Task</p></li>
            </ul>
            <br />
            <ul style={{ "list-style-type": "none" }}>
                <li><h1>Lists</h1></li>
                <li><p>All Tasks</p></li>
                <li><p>Groceries</p></li>
                <li><p>Work</p></li>
                <li><p>Add New List</p></li>
            </ul>
        </div>
    );
}

export default Menu;