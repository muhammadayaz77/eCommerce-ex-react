import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BagCard from '../../components/BagCard'
import { useSelector } from 'react-redux'
function Bag() {
  let bagsItem = useSelector(store => store.bag);
  let totalMRP = bagsItem.reduce((acc,value) => acc + value.original_price,0);
  let totalPrice = bagsItem.reduce((acc,value) => acc + value.original_price,0);
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-12 mx-20">
          <div className='lg:col-span-7 col-span-12'>
              {bagsItem.map(item => (
                <BagCard data={item}></BagCard> 
              ))}
          </div>
          <div className="lg:col-span-5 col-span-12">
              <div className='border-2 sm:m-10 p-10'>
                <p className='text-base font-bold'>PRICE DETAILS(3 items)</p>
                <div className='flex justify-between p-2 mt-5 text-base font-semibold'>
                <p>Total MRP</p>
                <p>{totalMRP}$</p>
                </div>
                <div className='flex justify-between p-2 text-base font-semibold'>
                <p>Discount on MRP</p>
                <p className='text-cyan-400'>199$</p>
                </div>
                <div className='flex justify-between p-2 text-base font-semibold'>
                <p>Order Fee</p>
                <p>30$</p>
                </div>
                <hr className='h-[2px] my-2 bg-gray-500' />
                <div className='flex justify-between p-2 text-base font-semibold'>
                <p>Total Price</p>
                <p>{totalPrice + 169}$</p>
                </div>
                <button className='btn btn-accent w-full mt-3'>PLACE ORDER</button>
              </div>
          </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Bag