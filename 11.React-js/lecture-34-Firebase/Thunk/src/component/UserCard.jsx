import React from 'react'

const UserCard = ({users}) => {
  return (
    <div className='bg-gray-500 m-2 w-96 text-white p-4'>
    <ul>
      <li>{users.username}</li>
    </ul>
  </div>
  )
}

export default UserCard