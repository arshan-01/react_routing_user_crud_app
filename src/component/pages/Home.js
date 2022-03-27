import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
function Home() {
  const[users,setUser]=useState([])
  useEffect(()=>{
    getuser();
  },[])
  const getuser = async ()=> {
    const result = await axios.get("http://localhost:3001/users")
    setUser(result.data)
  }
  const deleteuser=async(id)=>{
    await axios.delete(`http://localhost:3001/users/${id}`);
    getuser();
  }
  return (
    <div className='container py-4'>
        <h1 className="container w-50">All Users Detail </h1>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   {
      users.map((user)=>(
          <tr>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              <Link to={`/view/${user.id}`}  class="btn btn-primary" style={{marginRight:"5px"}}>View</Link>
              <Link to={`/edit/${user.id}`} class="btn btn-outline-primary" style={{marginRight:"5px"}}>Edit</Link>
              <Link to="" onClick={()=>deleteuser(user.id)} class="btn btn-danger">Delete</Link>
            </td>
          </tr>
        )
      )
   }
  </tbody>
</table>
    </div>
  )
}

export default Home