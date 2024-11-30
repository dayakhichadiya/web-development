import React from 'react'
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'

const User = (props) => {

    const cardImg = props.image

  return (
    <div className='h-fit w-72 border-2 m-2'>
      <div>
        <img src={cardImg} alt="images" />
      </div>
      <div className='p-2'>
        <h1 className='font-black text-3xl'>Card Components With {props.Name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eos nesciunt possimus eum voluptates officia cum, ad inventore eveniet dicta? Fuga quis voluptatibus magnam itaque vel quae veritatis beatae vero.</p>
        {/* {children} */}
      </div>
    </div>
  )
}

export default User