// Action Types.
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

// Action Creators.

export const addTask = (task) => {
    return ({
        type: ADD_TASK,
        payload: task,
    });
}

export const updateTask = (task) => {
    return ({
        type: UPDATE_TASK,
        payload: task,
    });
}

export const deleteTask = (taskId) => {
    return ({
        type: DELETE_TASK,
        payload: taskId,
    });
}