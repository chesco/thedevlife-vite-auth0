import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        token: '',
        clientID: ''
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        }
    }
});

export const { setToken } = appSlice.actions;

export default appSlice.reducer;