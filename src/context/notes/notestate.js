import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) =>{
   const initnotes = [
    {
      "_id": "66434ce238ea99ce205b27d",
      "user": "66432e4d509df36a4cc53919",
      "title": "Jangesh Khan",
      "description": "this book is about jangesh khan and this is the description of this book",
      "tag": "general",
      "date": "2024-05-14T11:37:06.085Z",
      "__v": 0
    },
    {
      "_id": "66434d5c38ea99cee205b27f",
      "user": "66432e4d509df36a4cc53919",
      "title": "Jangesh Khan - Part 2",
      "description": "This is the part 2 of Jangesh khan and its story..",
      "tag": "general",
      "date": "2024-05-14T11:39:08.107Z",
      "__v": 0
    },
    {
      "_id": "6644b2f5cb93e0ee20a01317",
      "user": "66432e4d509df36a4cc53919",
      "title": "Jangesh-4",
      "description": "This Watch comes with a simple Round dial and stainless steel back.",
      "tag": "Internet",
      "date": "2024-05-15T13:04:53.638Z",
      "__v": 0
    },
    {
      "_id": "6644b37fcb93e0ee20a0131c",
      "user": "66432e4d509df36a4cc53919",
      "title": "Harry Potter",
      "description": "Harry Potter is a series of film you can watch them on netflix ..",
      "tag": "general",
      "date": "2024-05-15T13:07:11.619Z",
      "__v": 0
    },
    {
      "_id": "6644b37fcb93e0e20a0131c",
      "user": "66432e4d509df36a4cc53919",
      "title": "Harry Potter",
      "description": "Harry Potter is a series of film you can watch them on netflix ..",
      "tag": "general",
      "date": "2024-05-15T13:07:11.619Z",
      "__v": 0
    },
    {
      "_id": "6644b37fcb93e0ee20a011c",
      "user": "66432e4d509df36a4cc53919",
      "title": "Harry Potter",
      "description": "Harry Potter is a series of film you can watch them on netflix ..",
      "tag": "general",
      "date": "2024-05-15T13:07:11.619Z",
      "__v": 0
    }
  ]
  const[notes,setnotes] = useState(initnotes);

  // Add a Note
  const addNote=(title,description,tag)=>{
    const note = {
      "_id": "6644b7fcb3e0ee20a011c",
      "user": "66432e4d509df36a4cc53919",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2024-05-15T13:07:11.619Z",
      "__v": 0
    }
    setnotes(notes.concat(note));
  }
  // Delete a Note
  const deleteNote=()=>{

  }
  // Edit a Note
  const editNote=()=>{

  }
    return(
        <NoteContext.Provider value = {{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;