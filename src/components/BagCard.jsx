import React,{useState} from 'react'

function BagCard() {
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
    <>
    <div className="card lg:card-side bg-base-100 shadow-xl h-[200px]">
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
      <button className="btn btn-error">Remove</button>
    </div>
  </div>
</div>
    </>
  )
}

export default BagCard