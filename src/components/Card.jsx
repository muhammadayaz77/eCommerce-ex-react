import React,{useState} from 'react'

function Card() {
  let [data,setData] = useState( {
    id: '001',
    image: 'images/1.jpg',
    company: 'Carlton London',
    item_name: 'Rhodium-Plated CZ Floral Studs',
    original_price: 1045,
    current_price: 606,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: '10 Oct 2023',
    rating: {
        stars: 4.5,
        count: 1400,
    },
},)
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