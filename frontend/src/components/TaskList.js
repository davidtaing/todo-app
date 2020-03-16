import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import TaskListTitle from './TaskListTitle';
import TaskListRow from './TaskListRow';

const TaskList = () => {
    return (
        <div>
            <h1>Tasks</h1>
            <article>
                <ListGroup>
                    <TaskListTitle text="Today" />
                    <TaskListRow data={{ title: "Task One" }} />
                    <TaskListRow data={{ title: "Task Two" }} />
                    <TaskListRow data={{ title: "Task Three" }} />
                </ListGroup>
            </article>
        </div>
    );
}

export default TaskList;