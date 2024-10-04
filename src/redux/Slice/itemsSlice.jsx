import { createSlice } from "@reduxjs/toolkit"
import { DEFAUL_ITEMS } from "../../data/items"
let itemsSlice = createSlice({
  name : 'items',
  initialState : DEFAUL_ITEMS,
  reducers : {
    addInitialItems : (store,action) => {
      console.log('hello')
      return store
    }
  }
})
export const itemsAction = itemsSlice.actions;
export default itemsSlice;