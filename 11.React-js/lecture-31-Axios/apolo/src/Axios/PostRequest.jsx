import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const PostRequest = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState("")
     
    const handleSubmit = (e) => {
        e.preventDefault()

        try{
            let response = axios.post('http://localhost:3000/profile' ,{
                name, email, pass
            })
            console.log(response.data)
        }
        catch(error){
            console.log(error)
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="" id="" onChange={(e) => setName(e.target.value)} />
            <input type="email" name="" id="" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" name="" id="" onChange={(e) => setPass(parseInt(e.target.value))} />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default PostRequest