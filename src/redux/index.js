import {configureStore} from '@reduxjs/toolkit'
import itemsSlice from './Slice/itemsSlice';
import loadingSlice from './Slice/loadingSlice';
import bagSlice from './Slice/bagSlice';
const store = configureStore({
  reducer : {
    items : itemsSlice.reducer,
    loading : loadingSlice.reducer,
    bag : bagSlice.reducer,
  }
})
export default store;