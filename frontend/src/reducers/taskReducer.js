const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        action.data
      ];
    case 'TOGGLE_TASK':
      let result = {
        tasks: state.tasks.map((task) => 
          (task._id === action.data._id)
            ? { ...task, completed: !task.completed }
            : task
        )
      }
      return result;
    case 'DELETE_TASK':
      let tasks = state.tasks.slice(0);
      let index = tasks.findIndex((task) => task._id == action.data._id)
      tasks.splice(index, 1);
      return { tasks: tasks };
    default:
      throw new Error();
  }
}

export default taskReducer;