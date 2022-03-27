import React, { useState,useEffect} from "react";
import axios from "axios";
import { NavLink, useParams} from "react-router-dom";


function ViewUser() {
    
const { id } = useParams();
console.log(id);

const [user, setUser] = useState({
name: "",
username: "",
email: "",
phone: "",
website: "",
});
useEffect(()=>{
    loadUser();
  },[])
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(result.data);
      }
  return (
      <div>
        <div class="container card border-success mt-5 w-50 py-4" >
        <h1>Hey, {user.name}</h1>
  <div class="card-header bg-transparent border-success">Your ID : {user.id}</div>
  <div class="card-body text-success">
    <h5 class="card-title">Your Username : {user.username}</h5>
  </div>
  <div class="card-footer bg-transparent border-success">Your Email Address : {user.email}</div>
</div>
  <button type="button" className="container btn btn-link">
            <NavLink to="/">Back to home</NavLink>
        </button>
</div>
   );
}

export default ViewUser