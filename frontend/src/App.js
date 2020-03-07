import React, { useState } from 'react';
import AddTaskButton from './components/AddTaskButton';
import TaskList from './components/TaskList';

function App() {
  // eslint-disable-next-line
  const [tasks, setTasks] = useState([
    {
      title: "Do Something",
      desc: "This is my first task."
    },
    {
      title: "Do Another Thing",
      desc: "This is my second task."
    },
    {
      title: "Walk The Dog",
      desc: "I don't actually have a dog."
    },
  ]);

  const handleAddTaskClick = (tasks) => {
    console.log("Added Task");
  };

  return (
    <div className="App">
      <AddTaskButton onClick={handleAddTaskClick} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
