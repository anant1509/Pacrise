import React, { useState } from 'react'
import LoginNavbar from './Navbar';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [email, setemail] = useState("")
    const [error, seterror] = useState('')
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        const response = await fetch("http://127.0.0.1:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            alert("Login successful:");
            console.log("Login Deatils")
            console.log("Username : - " ,username);
            console.log("Password : - ",password)
            navigate("/Home");
        } else {
            // alert("Invalid Username and Password")
            seterror(data.message)
        }

    };
     
   


return (
    <div className='main-content'>
        {/* <LoginNavbar /> */}
        <form onSubmit={handleLogin}>
            <h1 className="login">Login Page</h1>
            <div>
                <label htmlFor="username">
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
            {/* <div>
        <label htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
        />
      </div> */}
            <button className="btn" type="submit" >
                Login
            </button>
        </form>
        {error && <p style={{ color: "red" }}>Invalid deatails</p>}
    </div>
)
}

export default Login
