import {createSlice} from "@reduxjs/toolkit";

const initialState = []

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCurrentProducts(state, action) {
      return action.payload
    }
  }

})

export const {setCurrentProducts} = productsSlice.actions;
export default productsSlice.reducer;
