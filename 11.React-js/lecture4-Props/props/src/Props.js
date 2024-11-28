import React from 'react'

const Props = ({children, name, value}) => {

    // const ele1 = props.name;
    // const ele2 = props.value;
  return (
    <div>
        <h1 className='heading'>React Props Method</h1>
        {
            // <span>{props.name}</span>

        }
        <span>{name}</span>
        <span>{value}</span>
        {children}
    </div>
  )
}

export default Props