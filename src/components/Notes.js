import React from 'react'
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';

function Notes() {
    const context = useContext(noteContext);
    const{notes,setnotes} = context;
  return(
        <div className="container">
          <h2 className="my-3">Your Notes :</h2>
           {notes.map((elem)=>{
            return<NoteItem elem ={elem}/>
        })}
        </div>
  )
}

export default Notes