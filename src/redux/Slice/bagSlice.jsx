import { createSlice } from "@reduxjs/toolkit"
let bagSlice = createSlice({
  name : 'bag',
  initialState : [],
  reducers : {
    addToCard : (store,action) => {
       store = store.push(action.payload);
    },
    removeFromCart : (store,action) => {
      let deletedItem = store.filter(item => item.id !== action.payload);
      return deletedItem;
    }
  }
})
export const bagAction = bagSlice.actions;
export default bagSlice;