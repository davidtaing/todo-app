import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import { StateContext } from '../App';

import TaskListTitle from './TaskListTitle';
import TaskListRow from './TaskListRow';

const TaskList = () => {
    const state = useContext(StateContext);

    return (
        <div>
            <h1>Tasks</h1>
            <article>
                <ListGroup>
                    <TaskListTitle text="Today" />
                    {state.tasks.map((task) => (
                        <TaskListRow data={task} />
                    ))}
                </ListGroup>
            </article>
        </div>
    );
}

export default TaskList;