import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  origin: null,
  desitination: null,
  travelTimeInformation: null
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducer: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setOrigin: (state, action) => {
      state.travelTimeInformation = action.payload;
    }
  }
})