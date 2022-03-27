import React, { useState,useEffect} from "react";
import axios from "axios";
import { useNavigate,useParams} from "react-router-dom";

function EditUser() {
   

    const { id } = useParams();
    console.log(id);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const { name, username, email, phone, website } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
 
  useEffect(()=>{
    loadUser();
  },[])

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`, user);
    navigate('/')
  }
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data);
  }
  return (
    <div className="container py-4 w-50">
      <form onSubmit={e=>onSubmit(e)}>
        <h1 className="container w-50">Update User</h1>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter Your Name"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter Your Username"
            name="username"
            value={username}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div class="mb-3">
          <input
            type="email"
            placeholder="Enter Your Email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <button type="submit" class="btn btn-warning w-100">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditUser;
