import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BagCard from '../../components/BagCard'
function Bag() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-12 mx-20">
          <div className='col-span-7'>
              <BagCard></BagCard> 
          </div>
          <div className="col-span-5">
              history
          </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Bag