import React from 'react'
import { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import LoginNavbar from './Navbar'
const Registration = () => {
     const [username, setusername] = useState('')
     const [email, setemail] = useState('')
     const [password, setpassword] = useState('')
     const [error, seterror] = useState('')
     const navigate = useNavigate();

     const handleregistration =  async (event) => {
          event.preventDefault();

          const response = await fetch(' http://127.0.0.1:5001/registration' ,
              {
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body :JSON.stringify({username, password ,email})
              });
              
              const data = await response.json();

              if(response.ok){
                alert("Registartion sucessfully")
                console.log("Registration Details")
                console.log("Username : "+ username );
                console.log("Password : "+ password );
                console.log("Email : "+ email );
                navigate('/Login')
              }else{
                seterror(alert("Enter Valid deatails"))
              }
          }
          
   


  return (
    <div className='main-content'>
        {/* <LoginNavbar /> */}
        <form onSubmit={handleregistration}>
            <h1 className="registration">Registration Page</h1>
            <div>
                <label htmlFor="username">
                    Username:
                </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
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
                    onChange={(e) => setpassword(e.target.value)}
                    required
                />
            </div>
            <div>
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
      </div>
            <button className="btn" type="submit" >
                Register
            </button>
        </form>
        {error && <p style={{ color: "red" }}>Invalid deatails</p>}
    </div>
  )
}

export default Registration
