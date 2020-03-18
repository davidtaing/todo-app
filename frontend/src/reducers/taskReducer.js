const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        action.data
      ];
    case 'TOGGLE_TASK':
      const result = {
        tasks: state.tasks.map(task =>
          (task._id === action._id)
            ? { ...task, completed: !task.completed }
            : task
        )
      }
      console.log(result);
      return result;
    default:
      throw new Error();
  }
}

export default taskReducer;