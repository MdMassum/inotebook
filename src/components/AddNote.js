import React, { useState } from 'react'
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext'


function AddNote() {
  const context = useContext(noteContext);
  const{addNote} = context;
  const[note,setnote] = useState({title:"",description:"",tag:"General"})
  const handleSubmit = (e) =>{
    e.preventDefault();
    addNote(note.title,note.description,note.tag);
  }
  const onChange = (e) =>{
    setnote({...note,[e.target.name]:[e.target.value]});
  }
  return (
    <div className="container">
        <h2 >Add Your Note :</h2>
      <form >
            <div className="form-group m-4">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Title" onChange={onChange}/>
              
            </div>
            <div className="form-group m-4">
              <label htmlFor="description">Description</label>
              <input type="text" name="description" className="form-control" id="description" placeholder="Enter Description" onChange={onChange}/>
            </div>
            <div className="form-group m-4">
              <label htmlFor="tag">Tag</label>
              <input type="text" name="tag" className="form-control" id="tag" placeholder="Enter tag" onChange={onChange}/>
            </div>
            <button type="submit" className="btn btn-dark" onClick={handleSubmit}>Submit</button>
         </form>
    </div>
  )
}

export default AddNote