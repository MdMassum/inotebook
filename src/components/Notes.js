import React, { useEffect,useState} from 'react'
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import { useRef } from 'react';  // used for reference to modal popup for update button
import { useNavigate } from "react-router-dom";

function Notes(props) {
  const context = useContext(noteContext);
  const{notes,fetchNotes,editNote} = context;
  const[note,setNotes] = useState({id:"",etitle:"",edescription:"",etag:""})

  const{showAlert} = props;
  let navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('token')){
      fetchNotes();
    }
    else{
      showAlert("warning","Please Login First !!!")
      navigate('/login');
    }
    // eslint-disable-next-line
  }, [])
  
  const updateNote = (currNote)=>{
    ref.current.click();     //this will click on modal button where we have put ref = {ref}
    setNotes({id:currNote._id,
              etitle:currNote.title,
              edescription:currNote.description,
              etag:currNote.tag});
  }
  const ref = useRef(null)
  const refclose = useRef(null);
  
  const onChange = (e) =>{
    setNotes({...note,[e.target.name]:[e.target.value]});
  }
  const handleUpdate=(e)=>{
    editNote(note.id,note.etitle,note.edescription,note.etag);
    refclose.current.click();
  }
  return(
    <>
    <AddNote/>

        {/* <!-- Button trigger modal --> */}
        <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>

        {/* pop-up Modal  for edit--> */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {/* modal body form */}
                    <div className="form-group my-4">
                      <label htmlFor="title">Title</label>
                      <input type="text" name="etitle" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Title" onChange={onChange} value={note.etitle} />
                      
                    </div>
                    <div className="form-group my-4">
                      <label htmlFor="description">Description</label>
                      <input type="text" name="edescription" className="form-control" id="edescription" placeholder="Enter Description" onChange={onChange} value={note.edescription}/>
                    </div>
                    <div className="form-group my-4">
                      <label htmlFor="tag">Tag</label>
                      <input type="text" name="etag" className="form-control" id="etag" placeholder="Enter tag" onChange={onChange} value={note.etag} />
                    </div>
              </div>
              <div className="modal-footer">
                <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button disabled={note.etitle.length===0 || note.edescription.length===0} onClick={handleUpdate} type="button" className="btn btn-primary">Update Note</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row md-5">
          <h2 className="my-3">Your Notes :</h2>
          <div className="container mx-3">
            {notes.length === 0 && "No Notes to display !!"}
          </div>
           {notes.map((elem)=>{
            return<NoteItem key={elem._id} elem ={elem} updateNote={updateNote}/>
        })}
        </div>
        </>
  )
}

export default Notes