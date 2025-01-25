import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'


const CareerDetails = () => {

    const { id } = useParams()
    const career = useLoaderData()


  return (
    <div>
        <h1>This is details page {id}</h1>
        <div className='container'>
            <h2>{career.title}</h2>
            <h1><img src={career.image} alt="" /></h1>
        </div>
    </div>
  )
}

export const CareerDetailsData = async ({params}) => {
    const {id} = params
    const res = await fetch("https://fakestoreapi.com/products/" + id) 

    if (!res.ok){
        throw Error('Data not available !!!')
    }
}


export default CareerDetails