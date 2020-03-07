import React, { useState } from 'react';
import AddTaskButton from './components/AddTaskButton';
import TaskList from './components/TaskList';

function App() {
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

  const onAddTaskClick = () => {
    // create empty data object
    const data = {
      title: "",
      desc: ""
    };

    // create new array with new task added (shallow-copied array)
    const taskList = tasks.slice();
    taskList.push(data);

    // Update State
    setTasks(taskList);

    console.log("Added Task");
  };

  return (
    <div className="App">
      <AddTaskButton onClick={onAddTaskClick} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
