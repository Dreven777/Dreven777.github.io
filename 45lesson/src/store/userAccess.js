import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Admin: true,
    Moderator: true,
};

const userAccessSlice = createSlice({
    name: 'userAccess',
    initialState,
    reducers: {
        makeAdmin(state, action) {
            state.Admin = action.payload;
        },
        makeModerator(state, action) {
            state.Moderator = action.payload;
        },
    },
});

export const { makeAdmin, makeModerator } = userAccessSlice.actions;
export default userAccessSlice.reducer; 