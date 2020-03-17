const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        action.data
      ];
    case 'TOGGLE_TASK':
      return state.map(task =>
        (task._id === action._id)
          ? { ...task, completed: !task.completed }
          : task)
    default:
      throw new Error();
  }
}

export default taskReducer;