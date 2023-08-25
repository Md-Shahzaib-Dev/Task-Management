import { createStore } from "redux";
import taskReducers from "./reducers/taskReducers";

const store = createStore(taskReducers);

export default store;