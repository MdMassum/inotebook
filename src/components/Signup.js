import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup(props) {

  const [credentials,setCredentials] = useState({name:"",email:"",password:"",cpassword:""})
  let navigate = useNavigate();

  const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:[e.target.value]})
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const nm = credentials.name[0];
    const eml = credentials.email[0];
    const pwrd = credentials.password[0];
    const cpwrd = credentials.cpassword[0];
    console.log(nm,eml,pwrd,cpwrd);
    if(pwrd !== cpwrd){
      props.showAlert("warning","Password Mismatch");
      return;
    }
    // https://massum-inotebook.netlify.app
    // http://localhost:5000/api/auth/createuser
    const resp = await fetch('https://massum-inotebook.netlify.app/api/auth/createuser',{
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({name:nm,email:eml,password:pwrd})
    })
    const json = await resp.json();
    props.showAlert("success","User Created Successfylly")

    if(json.success === true){
      console.log("yes")
      localStorage.setItem("token",json.token);
      navigate('/login');
    }
    else{
      props.showAlert("danger",json.error)
      // alert(json.error);
    }
  }
  return (
       <form onSubmit={handleSubmit} >
        <h2 className="text-center">SignUp To iNotebook!</h2>
          <div className="form-group m-3">
              <label htmlFor="email">Name</label>
              <input type="text" className="form-control" name='name' id="name" aria-describedby="emailHelp"  value={credentials.name} onChange={onChange}/>
          </div>
          <div className="form-group m-3">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" name='email' id="email" aria-describedby="emailHelp" value={credentials.email} onChange={onChange} required/>
          </div>
          <div className="form-group m-3">
              <label htmlFor="password">Password</label>
              <input type="password" name='password' className="form-control" id="password"  value={credentials.password} onChange={onChange} required minLength={5}/>
          </div>
          <div className="form-group m-3">
              <label htmlFor="password">Confirm Password</label>
              <input type="password" name='cpassword' className="form-control" id="cpassword" value={credentials.cpassword} onChange={onChange} required minLength={5}/>
          </div>
          
          <button type="submit" className="btn btn-dark m-3">Sign Up</button>
       </form>
  )
}

export default Signup