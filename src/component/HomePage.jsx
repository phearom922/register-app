import React from 'react'
import ImageCart1 from "/public/cart-01.jpg"
import ImageCart2 from "/public/cart-02.jpg"
import ImageCart3 from "/public/cart-03.jpg"
import ImageDetail1 from "/public/details-1.jpg"
import ImageDetail2 from "/public/details-2.jpg"
import ImageDetail3 from "/public/details-3.jpg"


const HomePage = () => {
  
  return (
    <div className='grid grid-cols-6 gap-5 py-10'>
      <img className='object-cover h-full object-center rounded-2xl' src={ImageCart1} alt="cart" />
      <img className='object-cover h-full object-center rounded-2xl' src={ImageCart2} alt="cart" />
      <img className='object-cover h-full object-center rounded-2xl' src={ImageCart3} alt="cart" />
      <img className='object-cover h-full object-center rounded-2xl' src={ImageDetail1} alt="cart" />
      <img className='object-cover h-full object-center rounded-2xl' src={ImageDetail2} alt="cart" />
      <img className='object-cover h-full object-center rounded-2xl' src={ImageDetail3} alt="cart" />
    </div>
  )
}

export default HomePage
