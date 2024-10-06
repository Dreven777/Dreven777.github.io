import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userAccessReducer from './userAccess';

const rootReducer = combineReducers({
    userAccess: userAccessReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;