import React from 'react'
import './home.css'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
export const Home = () => {

const [data, setdata] = useState([])
  const Getapi =  () =>{

   axios.get("http://localhost:3001/").then((res)=>{
    setdata(res.data);
   })
  }
const HandleDelete = async (id) => {
 const res = await axios.delete(`http://localhost:3001/${id}`)
 console.log(res.data);
 Getapi()

}

  useEffect(() => {
    Getapi()
  
   
  }, [])
  
  return (

    <div>
        <table>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Country</th>
                <th>City</th>
                <th>Actions</th>
            </tr>
              {data.map((list,index)=>{
                return(
                  
                  <tr>
                  <td>{index+1}</td>
                  <td>{list.name}</td>
                  <td>{list.country}</td>
                  <td>{list.city}</td>
                  <td><button onClick={()=>HandleDelete(list.id)}>Delete</button></td>
                  </tr>
                )
              })}
        </table>
    </div>
  )
}
