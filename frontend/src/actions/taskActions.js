let nextTaskId = 3;

export const addTask = (_id = nextTaskId++, title = '', desc = '', group = '', completed = false) => { 
    return {
        type: 'ADD_TASK',
        data: {
            _id: _id,
            title: title,
            desc: desc,
            group: group,
            completed: completed
        }
    }
}

export const toggleTask = (_id) => {
    return {
        type: 'TOGGLE_TASK',
        data: {_id: _id}
    };
}

export const deleteTask = (_id) => {
    return {
        type: 'DELETE_TASK',
        data: {_id: _id}
    };
}

export const updateTask = (_id, title, desc, group, completed) => {
    return {
        type: 'UPDATE_TASK',
        data: {
            _id: _id,
            title: title,
            desc: desc,
            group: group,
            completed: completed
        }
    }
}