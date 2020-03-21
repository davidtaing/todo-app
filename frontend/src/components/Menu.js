import React, { useContext } from 'react';

import MainMenu from './MainMenu';
import GroupMenu from './GroupMenu';

import { DispatchContext } from '../App';
import { addTask } from '../actions/taskActions';

const Menu = () => {
    const dispatch = useContext(DispatchContext);

    return (
        <div>
            <MainMenu onAddClick={() => dispatch(addTask())}/>
            <br />
            <GroupMenu />
        </div>
    );
}
export default Menu;