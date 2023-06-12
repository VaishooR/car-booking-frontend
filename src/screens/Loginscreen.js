import React,{useState,useEffect} from 'react';
import './Loginscreen.css';
import {Link} from "react-router-dom";
import axios from 'axios';


const Loginscreen = () => {
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')

    async function login(){
            const user={
                email,
                password,
            }
            try{
              const result = (await axios.post('/api/users/login',user)).data

              localStorage.setItem('currentUser',JSON.stringify(result));
              window.location.href='/'
              
            }catch(error){
              console.log(error)
            }
            console.log(user)  
    }

  return (
    <div className="loginscreen">
        <div className="login-form">
            <p className="login-title">Login</p>

            <input type="text" className="form-control" placeholder="E-mail" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            <input type="text" className="form-control" placeholder="Password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
            
            <button className="login-btn" onClick={login}>Login</button>
            <Link to="/register">
              <p style={{color:'goldenrod', marginTop:'10px',fontSize:'14px'}}>Click here to Register</p>
            
            </Link>

        </div>   
    </div>
  )
}

export default Loginscreen