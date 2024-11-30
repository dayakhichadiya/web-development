import React from 'react'

export const Gallery = () => {
    return(
        <>
            <Profile/>
            <Profile/>
            <Profile/>
        </>
    )
}

const Profile = () => {
  return (
    <div>
      <img className='h-52 w-52' src="https://pixlr.com/images/generator/text-to-image.webp" alt="image"/>
    </div>
  )
}

export default Profile