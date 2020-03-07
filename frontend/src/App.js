import React, { useState } from 'react';

import AddTaskButton from './components/AddTaskButton';
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
  const [tasks, setTasks] = useState(data);
  const [deletedTasks, setDeletedTasks] = useState([]);
  const [taskCounter, setTaskCounter] = useState(3);

  const onAddTaskClick = () => {
    const taskList = tasks.slice();
    const newTask = createTask();

    // TODO remove
    setTaskCounter(taskCounter + 1);

    // Push to array and update state
    taskList.push(newTask);
    setTasks(taskList);
  };

  const onTaskChecked = (e, data) => {
    const taskList = tasks.slice();
    const taskIndex = taskList.findIndex((element) => element._id === data._id);
    const oldTask = taskList[taskIndex];

    // update dataset via state change
    if (taskIndex !== -1) {
      const task = createTask(oldTask._id, oldTask.title, oldTask.desc, e.target.checked);
      taskList.splice(taskIndex, 1, task);
      setTasks(taskList);
    }
  }

  const onDeleteTaskClick = (taskId) => {
    let taskList = tasks.slice();
    const index = taskList.findIndex((data) => data._id === taskId);

    if (index !== -1) {
      // Remove from tasks list
      const removedTasks = taskList.splice(index, 1);

      // Add to removed tasks list
      let deletedTaskList = deletedTasks.slice();
      deletedTaskList.concat(removedTasks);

      // Save state
      setDeletedTasks(deletedTaskList);
      setTasks(taskList);
    }
  }

  const createTask = (_id = taskCounter.toString() , title = "", desc = "", complete=false) => {
    return {
      _id,
      title,
      desc,
      complete
    }
  }

  // RENDER
  return (
    <div className="App">
      <AddTaskButton onClick={onAddTaskClick} />
      <TaskList tasks={tasks} onTaskChecked={onTaskChecked} onDeleteTaskClick={onDeleteTaskClick} />
    </div>
  );
}

export default App;
