import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: 0,
    isAuthenticated: false,
    updateUser: 0
}

export const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        SET_USER: (state, action) => {
            state.user = action.payload
        },
        SET_IS_AUTHENTICATED: (state, action) => {
            state.user = action.payload
        },
        UPDATE_USER: (state, action) => {
            state.updateUser = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { SET_USER, SET_IS_AUTHENTICATED, UPDATE_USER } = user.actions

export default user.reducer
