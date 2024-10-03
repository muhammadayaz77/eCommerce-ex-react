import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Frontend from './Frontend'
function index() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<Frontend />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default index