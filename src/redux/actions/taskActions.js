// Action Types
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

// Action Creators
export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
});

export const updateTask = (task) => ({
    type: UPDATE_TASK,
    payload: task,
});

export const deleteTask = (taskId) => ({
    type: DELETE_TASK,
    payload: taskId,
});
