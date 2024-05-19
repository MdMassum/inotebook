import React from "react";
// NavLink instead of Link bcoz whenever we click on any link it will add class active automatically
import {Link,NavLink} from "react-router-dom"  

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <NavLink className="navbar-brand "  to="#">iNotebook</NavLink>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link "aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
      </ul>
    </div>
    <form action="" className="d-flex">
      <Link to="/login" class="btn btn-primary mx-1" role="button" >Login</Link>
      <Link to="/signup" class="btn btn-primary mx-1" role="button" >Sign Up</Link>
      </form>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
     
</nav>
    </>
  );
}

export default Navbar;
