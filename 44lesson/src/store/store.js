import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userAccess} from "./userAccess";

const rootReducer = combineReducers({
    userAccess: userAccess,
})

const store = configureStore({
    reducer: rootReducer,
});

export default store;