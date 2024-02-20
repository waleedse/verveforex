import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: 0,
  isAuthenticated: false
}

export const admin = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    SET_USER: (state, action) => {
      state.user = action.payload
    },
    SET_IS_AUTHENTICATED: (state, action) => {
      state.user = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { SET_USER, SET_IS_AUTHENTICATED} = admin.actions

export default admin.reducer
