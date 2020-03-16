import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Menu from './components/Menu';
import TaskList from './components/TaskList';


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
            <TaskList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
    
export default App;
