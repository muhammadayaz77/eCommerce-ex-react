import React,{useState} from 'react'

function Card({data}) {
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
    <p>{data.rating.stars}⭐ | {data.rating.count}</p>
    <h2 className="card-title">{data.company}</h2>
    <p>{data.item_name}</p>
    <p className='text-sm font-semibold'>Rs {data.original_price} <span className='text-green-600'>({data.discount_percentage}% OFF)</span></p>
    <div className="card-actions justify-end">
      <button className="btn btn- btn-primary">Add to Bag</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card