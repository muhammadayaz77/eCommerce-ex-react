import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux';
function Main() {
  let items = useSelector(store => store.items);
  return (
    <>
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-10 gap-10 my-20">
    {items.map(data => 
    <Card data={data}></Card>
    )}

    </div>
    </>
  )
}

export default Main