import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const apiUrl = "http://127.0.0.1:5000/login";
    // const apiUrl = "http://127.0.0.1:5000/data";
    // const loginData = {
    //   username: username,
    //   password: password,
    // };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username ,password}),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful:", data);
        navigate("/welcome");
      } else {
        console.error("Login failed:", response.status);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="main-container">
      <form onSubmit={handleSubmit}>
        <h1 className="login">Login Page</h1>
        <div>
          <label htmlFor="username" className="label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
