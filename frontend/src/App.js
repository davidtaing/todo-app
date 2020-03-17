import React, { useReducer } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Menu from './components/Menu';
import TaskList from './components/TaskList';

import taskReducer from './reducers/taskReducer';

export const DispatchContext = React.createContext();
export const StateContext = React.createContext();

const initialState = {
  tasks: [
    {
      _id: "0",
      title: "Do Something",
      desc: "This is my first task.",
      group: "General",
      complete: false
    },
    {
      _id: "1",
      title: "Do Another Thing",
      desc: "This is my second task.",
      group: "General",
      complete: false
    },
    {
      _id: "2",
      title: "Walk The Dog",
      desc: "I don't actually have a dog.",
      group: "Exercise",
      complete: false
    },
  ]
};

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
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
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
