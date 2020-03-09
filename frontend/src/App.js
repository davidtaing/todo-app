import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
          <Col sm={3}>Menu</Col>
          <Col sm={9} className="main-content">

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
