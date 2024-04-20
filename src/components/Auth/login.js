import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/", { email, password });
      if (res.data === "exist") {
        history.push("/", { state: { id: email } });
      } else if (res.data === "notexist") {
        alert("User has not signed up");
      }
    } catch (error) {
      alert("Wrong details. Please try again.");
      console.error(error);
    }
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={submit}>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </div>
        <button type="submit">Login</button>
      </form>

      <br />
      <p>OR</p>
      <br />
      
      {/* Use 'a' tag for external links */}
      <a href="/signup">Signup Page</a>
    </div>
  );
}

export default Login;
