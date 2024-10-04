import {configureStore} from '@reduxjs/toolkit'
import itemsSlice from './Slice/itemsSlice';
const store = configureStore({
  reducer : {
    items : itemsSlice.reducer
  }
})
export default store;