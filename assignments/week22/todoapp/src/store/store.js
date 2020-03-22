import todoReducer from './reducers/todoReducer';
import { createStore, combineReducers } from 'redux';

let rootReducer = combineReducers ({
    todo: todoReducer,
})

let store = createStore(rootReducer)

const stateMapper = state => state;

export {
    store,
    stateMapper
}