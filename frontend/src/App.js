import React, { useState } from 'react';
import AddTaskButton from './components/AddTaskButton';

function App() {
  // eslint-disable-next-line
  const [tasks, setTasks] = useState([]);

  const handleAddTaskClick = (tasks) => {
    console.log("Added Task");
  };

  return (
    <div className="App">
      <AddTaskButton onClick={handleAddTaskClick} />
    </div>
  );
}

export default App;
