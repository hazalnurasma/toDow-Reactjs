import {createStore} from "redux";
import toDoReducer from "./Reducers";
import { composeWithDevTools } from "redux-devtools-extension";
 
const store = createStore(toDoReducer, composeWithDevTools());

export default store;