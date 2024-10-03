import React from 'react'
import Home from './Home'
import { Route,Routes } from 'react-router'
import Bag from './Bag'
function index() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/bag' element={<Bag />} />
    </Routes>
    </>
  )
}

export default index