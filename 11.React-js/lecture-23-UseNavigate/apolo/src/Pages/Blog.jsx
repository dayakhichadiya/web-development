import React, { useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Blog = () => {

    const navigate = useNavigate()

    const redirect = () => {
        navigate('/')
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/about')
        },5000)
        return () => clearTimeout(timer)
    }, [])

  return (
    <div>
        <h1 className='heading'>This is blog page</h1>
        <button className='btn' onClick={redirect}>Go to Home Page</button>
    </div>

  )
}

export default Blog