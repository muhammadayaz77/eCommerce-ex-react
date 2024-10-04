import {configureStore} from '@reduxjs/toolkit'
import itemsSlice from './Slice/itemsSlice';
import loadingSlice from './Slice/loadingSlice';
const store = configureStore({
  reducer : {
    items : itemsSlice.reducer,
    loading : loadingSlice.reducer,
  }
})
export default store;