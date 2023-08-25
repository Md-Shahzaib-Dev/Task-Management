// Actions.
import { ADD_TASK, UPDATE_TASK, DELETE_TASK } from "../actions/taskActions";

// InitialState.
const initialState = { tasks: [] };

// TaskReducers.
const taskReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case UPDATE_TASK:
            const updatedTasks = state.tasks.map((task) => task.id === action.payload.id ? action.payload : task);
            return { ...state, tasks: updatedTasks };
        case DELETE_TASK:
            const filteredTasks = state.tasks.filter(task => task.id !== action.payload);
            return { ...state, tasks: filteredTasks };
        default: return state;
    };
};

export default taskReducers;