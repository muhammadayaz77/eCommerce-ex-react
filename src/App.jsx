import { useEffect } from 'react'
import Routes from './pages/Routes'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { itemsAction } from './redux/Slice/itemsSlice';
import { loadingAction } from './redux/Slice/loadingSlice';
let API_URL = 'http://localhost:3000/api/data';
function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadingAction.fetchedLoading(true));
    axios.get(API_URL)
  .then(function (response) {
    // handle success
    dispatch(itemsAction.addInitialItems(response.data));
    dispatch(loadingAction.fetchedLoading(false));

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  },[])
  return (
   <>
   <Routes></Routes>
   </>
  )
}

export default App
