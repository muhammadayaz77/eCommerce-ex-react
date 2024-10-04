import { createSlice } from "@reduxjs/toolkit";

let loadingSlice = createSlice({
  name : "loading",
  initialState : false,
  reducers : {
    fetchedLoading : (state,action) => {
      return state = action.payload;
    }
  }

})

export const loadingAction = loadingSlice.actions;
export default loadingSlice;