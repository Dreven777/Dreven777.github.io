import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userAccessReducer from './userAccess';
import postReducer from './async';

const rootReducer = combineReducers({
    userAccess: userAccessReducer,
    posts: postReducer
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;