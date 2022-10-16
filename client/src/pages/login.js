import React from 'react'
import { useState } from 'react';
import { useNavigate} from "react-router-dom";
import './auth.css'


export default function Login() {

  const [username,setUsername]= useState("");
  const [password,setPassword]= useState("");
  const navigate = useNavigate();
  
  async function handleSubmit(e)
  {
    e.preventDefault();
    const response = await fetch('http://localhost:1837/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
			    username,
				password,
			})
		})
        .then((d)=>{
            console.log(d);
            if(d.status===200)
            {
                navigate('/homepage')
            }
            // console.log(d);
        })
        .catch((e)=>{
            console.log(e);
        })   
  }

  return (
    <div className='global-container'>
        <div className='card login-form'>
            <div className='card-body'>
                <div className='card-text'>
                    <form  onSubmit={handleSubmit}>
                        <h2 className='card-title text-center'>Login</h2>
                        <div className="form-group">
                            <label htmlFor="exampleInputName1" className="form-label">User Name</label>
                            <input type="text" className="form-control form-control-sm" id="exampleInputName1" value={username} onChange={(e)=>{
                                setUsername(e.target.value)
                            }} required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control form-control-sm" id="exampleInputPassword1" value={password} onChange={(e)=>{
                                setPassword(e.target.value)}} required/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        <div class="sign-up">
                                Don't have an account? <a href="/register">Create One</a>
                        </div>            
                    </form>

                </div>        
            
            </div>


        </div>
                
        
    </div>
  )
}
