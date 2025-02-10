import React from 'react'
import ImageCart1 from "/public/cart-01.jpg"
import ImageCart2 from "/public/cart-02.jpg"


const HomePage = () => {
  
  return (
    <div className='grid grid-cols-6 gap-5 py-10'>
      <img className='object-cover h-full object-center rounded-2xl' src={ImageCart1} alt="cart" />
      <img className='object-cover h-full object-center rounded-2xl' src={ImageCart2} alt="cart" />
    
      
    </div>
  )
}

export default HomePage
