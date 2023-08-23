import { createStore } from 'redux';
import taskReducer from './reducers/taskReducers';

const store = createStore(taskReducer);

export default store;
