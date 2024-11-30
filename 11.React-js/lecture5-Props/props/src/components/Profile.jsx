import React from 'react'
import User from './User'
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'

const Profile = (props) => {
    return (
        <div className='flex'>
            <User image={img1} Name={props.Name}>
                <a className='px-4 py-2 bg-blue-700 text-white block mt-4 text-center font-black' href="">Submit</a>
            </User>
            <User image={img2}>
                <a className='px-4 py-2 bg-blue-700 text-white block mt-4 text-center font-black' href="">Reset</a>
            </User>
            <User image={img3}>
                <a className='px-4 py-2 bg-blue-700 text-white block mt-4 text-center font-black' href="">Click</a>
            </User>
            <User image={img4}>
                <a className='px-4 py-2 bg-blue-700 text-white block mt-4 text-center font-black' href="">Update</a>
            </User>
        </div>
    )
}

export default Profile