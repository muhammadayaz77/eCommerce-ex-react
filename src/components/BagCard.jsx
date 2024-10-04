import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { bagAction } from '../redux/Slice/bagSlice';

function BagCard({data}) {
  let dispatch = useDispatch();
  let handleDelete = (id) => {
    dispatch(bagAction.removeFromCart(id))
  }
  return (
    <>
    <div className="card card-side bg-base-100 shadow-xl sm:h-[200px] my-10">
  <figure>
    <img
      src={data.image}
     
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{data.company}</h2>
    <p>{data.item_name}</p>
    <p className='text-base font-semibold'>Rs {data.original_price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-error"
      onClick={() => handleDelete(data.id)}
      >Remove</button>
    </div>
  </div>
</div>
    </>
  )
}

export default BagCard