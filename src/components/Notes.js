import React from 'react'
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';

function Notes() {
  const context = useContext(noteContext);
  const{notes} = context;
  return(
    <>
    <AddNote/>
        <div className="row md-5">
          <h2 className="my-3">Your Notes :</h2>
           {notes.map((elem)=>{
            return<NoteItem key={elem._id} elem ={elem}/>
        })}
        </div>
        </>
  )
}

export default Notes