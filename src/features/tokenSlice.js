import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
}

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    unSetToken: (state, action) => {
      state.token = action.payload
    },
  },
})

export const { setToken, unSetToken } = tokenSlice.actions

export default tokenSlice.reducer