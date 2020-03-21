const taskReducer = (state, action) => {
  let tasks;
  let index;

  switch (action.type) {
    case 'ADD_TASK':
      tasks = state.tasks.slice(0);
      tasks.push(action.data);
      return {
        ...state, tasks: tasks
      };
    case 'TOGGLE_TASK':
      return {
        tasks: state.tasks.map((task) => 
          (task._id === action.data._id)
            ? { ...task, completed: !task.completed }
            : task
        )
      };
    case 'DELETE_TASK':
      tasks = state.tasks.slice(0);
      index = tasks.findIndex((task) => task._id === action.data._id)
      tasks.splice(index, 1);
      return { tasks: tasks };
    case 'UPDATE_TASK':
      tasks = state.tasks.slice(0);
      index = tasks.findIndex((task) => task._id === action.data._id)
      tasks.splice(index, 1, action.data);
      return { tasks: tasks };
    default:
      throw new Error();
  }
}

export default taskReducer;