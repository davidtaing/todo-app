import React, { useState } from 'react';
import AddTaskButton from './components/AddTaskButton';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([
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
      desc: "",
      complete: false
    };

    setTaskCounter(taskCounter + 1);

    taskList.push(data);

    // Update State
    setTasks(taskList);

    console.log("Added Task");
  };

  const onTaskChecked = (e, data) => {
    // grab task
    const taskList = tasks.slice();
    const taskIndex = taskList.findIndex((element) => element._id === data._id);
    // update dataset via state change
    if (taskIndex !== -1) {
      const task = {
        _id: taskList[taskIndex]._id,
        title: taskList[taskIndex]._title,
        desc: taskList[taskIndex].desc,
        complete: e.target.checked === true
      }

      taskList.splice(taskIndex, 1, task);
      setTasks(taskList);
    }
  }

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
      <TaskList tasks={tasks} onTaskChecked={onTaskChecked} onDeleteTaskClick={onDeleteTaskClick}/>
    </div>
  );
}

export default App;
