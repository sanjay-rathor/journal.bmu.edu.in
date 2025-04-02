import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import todos from "./todos_reducer.js";
import countReducer from "./count_reducers";
import { createPromise } from 'redux-promise-middleware';
//you apply any middleware here

const rootReducer = combineReducers({
    todos: todos,
    count: countReducer
  });
// const store = createStoreWithMiddleware(, md)
// //const store = createStore(RootReducer, md)
const store = createStore( rootReducer, applyMiddleware( thunk ));
export default store