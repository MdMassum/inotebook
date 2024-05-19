import React from "react";
// NavLink instead of Link bcoz whenever we click on any link it will add class active automatically
import {Link,NavLink, useNavigate} from "react-router-dom"  


function Navbar() {
  let navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('/login')
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
    <div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
    <div className="d-block"><NavLink className="navbar-brand mx-2"  to="#">iNotebook</NavLink></div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link "aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={(!localStorage.getItem('token'))?"/login":"/about"}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={(!localStorage.getItem('token'))?"/login":"/contact"}>ContactUs</NavLink>
        </li>
      </ul>
    </div>
    {(!localStorage.getItem('token')) ? <form action="" className="d-flex">
      <Link to="/login" className="btn btn-info mx-1" role="button" >Login</Link>
      <Link to="/signup" className="btn btn-info mx-1" role="button" >Sign Up</Link>
      </form> : <button onClick={handleLogout} type="button" className="btn btn-info">Logout</button> }
  </div>
     
</nav>
    </>
  );
}

export default Navbar;
