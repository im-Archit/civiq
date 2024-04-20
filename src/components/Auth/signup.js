import React, { useEffect, useState } from "react"
import axios from "axios"
import { useHistory, Link } from "react-router-dom"
import "./signup.css"



function Signup() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    async function submit(e) {
      e.preventDefault();
    
      try {
        const res = await axios.post("http://localhost:8000/signup", {
          email,
          password,
        });
    
        if (res.data === "exist") {
          alert("User already exists");
        } else if (res.data === "notexist") {
          history.push("/", { state: { id: email } });
        }
      } catch (error) {
        alert("Something went wrong. Please check your details and try again.");
        console.error("Error:", error);
      }
    }
  
    return (
      <div className="signup-container">
        <h1>Signup</h1>
        <form onSubmit={submit}>
          <div className="input-group">
            <label>Email:</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          </div>
          <button type="submit">Signup</button>
        </form>
        <p>OR</p>
        <Link to="/">Login Page</Link>
      </div>
    );
  }
  
  export default Signup;