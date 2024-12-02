import React from 'react'


// const Eproduct = ({IsStock, name}) => {
//     if(IsStock){
//         return <li>{name} ✔</li>
//     }
//     return <li><del>{name}</del></li>
// }

// const Eproduct = ({IsStock, name}) => {
//   return <li>
//       {IsStock ? name : (<del>{name}</del>)}
//   </li>
// }

const Eproduct = ({IsStock, name}) => {
  return <li>
    {name} {IsStock && '✅'}
  </li>
}

const Product = () => {
  return (
    <div className='w-72 border-2 p-4 m-4 bg-slate-300'> 
        <h1 className='Product-heading'>Product Activity Component</h1>
        <ul className=''>
            <Eproduct name="Perfume" IsStock={true}/>
            <Eproduct name="Goggles" IsStock={false}/>
            <Eproduct name="Purse" IsStock={true}/>
            <Eproduct name="BookShelf" IsStock={true}/>
            <Eproduct name="Shoes" IsStock={false}/>
            <Eproduct name="Ear-buds" IsStock={true}/>
            <Eproduct name="Watch" IsStock={true}/>
        </ul>
    </div>
  )
}

export default Product