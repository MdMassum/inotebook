import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login(props) {
    const [credentials,setCredentials] = useState({email:"",password:""});
    let navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        // console.log(credentials.email[0],credentials.password[0]);
        const eml = credentials.email[0]
        const pwrd = credentials.password[0]
        const resp = await fetch('http://localhost:5000/api/auth/login',{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({email:eml,password:pwrd})
        });
        const json = await resp.json();
        console.log(json);
        console.log(json.success);
        if(json.success === true){
            props.showAlert("success","logged in Successfylly")
            localStorage.setItem("token",json.token);
            navigate('/');
        }
        else{
            props.showAlert("danger","Invalid Credentials")
            // alert("Invalid Credentials")
        }
    }   
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:[e.target.value]})
    }
      return (
        <div className="container mt-3">
            <form onSubmit={handleSubmit} >
                <h2 className="text-center">Login To iNotebook!</h2>
                <div className="form-group m-3">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" name='email' id="email" aria-describedby="emailHelp" value={credentials.email} onChange={onChange} required/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group m-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' className="form-control" id="password" value={credentials.password} onChange={onChange} required/>
                </div>
                
                <button type="submit" className="btn btn-dark m-3">Login</button>
            </form>
        </div>
      );
    }

export default Login