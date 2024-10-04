import { createSlice } from "@reduxjs/toolkit"
let itemsSlice = createSlice({
  name : 'items',
  initialState : [],
  reducers : {
    addInitialItems : (store,action) => {
      return store = action.payload;
    }
  }
})
export const itemsAction = itemsSlice.actions;
export default itemsSlice;