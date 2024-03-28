import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  promotions: [],
  response: null
}

export const promotions = createSlice({
  name: 'promotion',
  initialState,
  reducers: {
    SET_PROMOTIONS: (state, action) => {
      state.promotions = action.payload
    },
    SET_RESPONSE: (state, action) => {
      state.response = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { SET_PROMOTIONS, SET_RESPONSE} = promotions.actions

export default promotions.reducer
