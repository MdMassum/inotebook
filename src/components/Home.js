import React from 'react'
import Notes from './Notes';

function Home() {
  
  return (
    <div className="container my-3">
      <h2 >Add Your Note :</h2>
      <form >
            <div className="form-group m-4">
              <label for="exampleInputEmail1">Title</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              
            </div>
            <div className="form-group m-4">
              <label for="exampleInputPassword1">Description</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-dark  mx-4">Submit</button>
         </form>
      <Notes/>
    </div>
  )
}

export default Home