import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import TaskListRow from './components/TaskListRow';

const data = [
  {
    _id: "0",
    title: "Do Something",
    desc: "This is my first task.",
    complete: false
  },
  {
    _id: "1",
    title: "Do Another Thing",
    desc: "This is my second task.",
    complete: false
  },
  {
    _id: "2",
    title: "Walk The Dog",
    desc: "I don't actually have a dog.",
    complete: false
  },
];

function App() {
  // eslint-disable-next-line
  const [tasks, setTasks] = useState(data);
  // eslint-disable-next-line
  const [deletedTasks, setDeletedTasks] = useState([]);
  // eslint-disable-next-line
  const [taskCounter, setTaskCounter] = useState(3);

  // RENDER
  return (
    <div className="App">
      <Container>
        <Row>
          <Col sm={3}>
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
          </Col>
          <Col sm className="main-content">
            <h1>Tasks</h1>
            <article>
              <ListGroup>
                {/* TODO Refactor out to Task List Tilte.*/}
                <ListGroup.Item variant='dark'>
                  <div className="TaskListTitle">
                    <h2>Today</h2>
                  </div>
                </ListGroup.Item>
                {/* TODO Refactor out to Task List Row.*/}
                <TaskListRow data={{title: "Task One"}}/>
                <TaskListRow data={{title: "Task Two"}}/>
                <TaskListRow data={{title: "Task Three"}}/>
              </ListGroup>
            </article>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
    
export default App;
