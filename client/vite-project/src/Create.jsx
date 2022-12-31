import React, { useState } from 'react'
import axios, { AxiosError } from 'axios'
import './createuser.css'
import {useNavigate} from 'react-router-dom'
export const Create = () => {
  const navigate = useNavigate()
  const [name, setname] = useState("")
  const [country, setcountry] = useState("")
  const [city, setcity] = useState("")
const [errorr, seterror] = useState('')
  const HandleSubmit = async () =>{
    
    
    let res = await axios.post("http://localhost:3001/",{
      name:name,
      city:city,
      country:country
    })
    seterror(res.data.details[0].message);
 
    }
  return (
    <div className='createuser'>
      
      <form action="">
      <fieldset>
        <legend>User Info</legend>
     
        <label htmlFor="">Name</label>
        <input type="text" onChange={(e)=>setname(e.target.value)}/>

        <label htmlFor="">Country</label>
        <input type="text" onChange={(e)=>setcountry(e.target.value)}/>

        <label htmlFor="">City</label>
        <input type="text" onChange={(e)=>setcity(e.target.value)}/>

      
        </fieldset>
      <p>{errorr}</p>

      </form>

      <button onClick={HandleSubmit} className="btn"> Submit</button>
    </div>
  )
}
