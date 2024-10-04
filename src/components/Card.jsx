import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bagAction } from '../redux/Slice/bagSlice';

function Card({data}) {
  let dispatch = useDispatch();
  let bagsItem = useSelector(store => store.bag);
  let itemFound = bagsItem.findIndex(item => item.id === data.id);

  let handleAddToCart = (data) => {
    dispatch(bagAction.addToCard(data))
  }
  let handleRemoveFromCart = (id) => {
    dispatch(bagAction.removeFromCart(id))
  }
  return (
    <div>
      <div className="card glass w-full">
  <figure>
    <img
      src={data.image}
      className='h-[300px] w-full'
      alt="car!" />
  </figure>
  <div className="card-body mt-[-20px]">
    <p>{data.rating.stars} ⭐ | {data.rating.count}</p>
    <h2 className="card-title">{data.company}</h2>
    <p>{data.item_name}</p>
    <p className='text-sm font-semibold'>Rs {data.original_price} <span className='text-green-600'>({data.discount_percentage}% OFF)</span></p>
    <div className="card-actions justify-end">
      {
        itemFound >= 0 ?
        <button className="btn btn-error"
        onClick={() => handleRemoveFromCart(data.id)}
        >Remove from Bag</button>
        :
        <button className="btn btn- btn-primary"
        onClick={() => handleAddToCart(data)}
        >Add to Bag</button>

      }
      
    </div>
  </div>
</div>
    </div>
  )
}

export default Card