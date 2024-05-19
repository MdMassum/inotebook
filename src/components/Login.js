import React from 'react'
import { useState } from 'react';

function Login() {
      return (
        <div  style={{"width":"500px"}} className="container m-5">
            <form>
                <div className="form-group m-3">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" name='email' id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group m-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' className="form-control" id="password" placeholder="Password"/>
                </div>
                
                <button type="submit" className="btn btn-dark m-3">Login</button>
            </form>
        </div>
      );
    }

export default Login