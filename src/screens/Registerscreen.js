import React,{useState,useEffect} from 'react';
import './Registerscreen.css';
import axios from 'axios';
import {Link} from "react-router-dom";


const Registerscreen = () => {
    const[name,setname]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const[cpassword,setcpassword]=useState('')

    async function register(){
        if(password==cpassword){
            const user={
                name,
                email,
                password,
                cpassword
            }
            try{
                const result = (await axios.post('/api/users/register',user)).data
            }catch(error){
                console.log(error)
            }
            console.log('reg user',user)
        }else{
            alert('Passwords not matched')
        }
        
    }
  return (
    <div className="registerscreen">
        <div className="register-form">
            <p className="register-title">Register</p>
            <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
            <input type="text" className="form-control" placeholder="E-mail" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            <input type="text" className="form-control" placeholder="Password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
            <input type="text" className="form-control" placeholder="Confirm password" value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}/>

            <button className="register-btn" onClick={register}>Register</button>
            <Link to="/login">
            <p style={{color:'goldenrod', marginTop:'10px',fontSize:'14px'}}>Click here to Login</p>
            </Link>
        </div>   
    </div>
  )
}

export default Registerscreen