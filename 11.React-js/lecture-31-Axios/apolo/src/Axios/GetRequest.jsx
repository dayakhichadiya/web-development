import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const GetRequest = () => {

    const [data, setData] = useState([])

    console.log(data);

    const handleData = () => {
        let response = axios.get('http://localhost:3000/profile')
        .then((response) => {
            setData(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        handleData()
    }, [])

  return (
    <div>
        {
            data.map((item) => {
                return(
                    <ul key={item}>
                        <li>{item.name}</li>
                        <li>{item.email}</li>
                        <li>{item.password}</li>
                    </ul>
                )
            })
        }
    </div>
  )
}

export default GetRequest