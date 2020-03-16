import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import TaskListTitle from './components/TaskListTitle';
import TaskListRow from './components/TaskListRow';
import Menu from './components/Menu';

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
  // RENDER
  return (
    <div className="App">
      <Container>
        <Row>
          <Col sm={3}>
            <Menu />
          </Col>
          <Col sm className="main-content">
            <h1>Tasks</h1>
            <article>
              <ListGroup>
                <TaskListTitle text="Today" />
                <TaskListRow data={{title: "Task One"}} />
                <TaskListRow data={{title: "Task Two"}} />
                <TaskListRow data={{title: "Task Three"}} />
              </ListGroup>
              <ListGroup>
                <TaskListTitle text="Tomorrow" />
                <TaskListRow data={{title: "Task Four"}} />
              </ListGroup>
            </article>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
    
export default App;
