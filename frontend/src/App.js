import React, { useState } from 'react';
import AddTaskButton from './components/AddTaskButton';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    {
      _id: "0",
      title: "Do Something",
      desc: "This is my first task."
    },
    {
      _id: "1",
      title: "Do Another Thing",
      desc: "This is my second task."
    },
    {
      _id: "2",
      title: "Walk The Dog",
      desc: "I don't actually have a dog."
    },
  ]);
  const [deletedTasks, setDeletedTasks] = useState([]);
  const [taskCounter, setTaskCounter] = useState(3);

  const onAddTaskClick = () => {
    // grab tasks (shallow-copied to avoid mutations)
    const taskList = tasks.slice();

    // create empty data object
    const data = {
      _id: taskCounter.toString(),
      title: "",
      desc: ""
    };

    setTaskCounter(taskCounter + 1);

    taskList.push(data);

    // Update State
    setTasks(taskList);

    console.log("Added Task");
  };

  const onDeleteTaskClick = (taskId) => {
    console.log(`deleted task ${taskId}`);
    // Get the task
    let taskList = tasks.slice();
    console.log(taskList);

    // Find index
    const index = taskList.findIndex((data) => data._id === taskId);
    console.log(`index ${index}`);

    if (index !== -1) {
      // Remove from tasks list
      const removedTasks = taskList.splice(index, 1);

      // Add to removed tasks list
      let deletedTaskList = deletedTasks.slice();
      deletedTaskList.concat(removedTasks);

      setDeletedTasks(deletedTaskList);
      setTasks(taskList);
    }
  }

  return (
    <div className="App">
      <AddTaskButton onClick={onAddTaskClick} />
      <TaskList tasks={tasks} onDeleteTaskClick={onDeleteTaskClick}/>
    </div>
  );
}

export default App;
