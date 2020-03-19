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
    default:
      throw new Error();
  }
}

export default taskReducer;