import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) =>{
   const initnotes = [
    {
      "_id": "66434ce238ea99cee205b27d",
      "user": "66432e4d509df36a4cc53919",
      "title": "Jangesh Khan - A prem Kath",
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
    }
  ] 
  const[notes,setnotes] = useState(initnotes);
    return(
        <NoteContext.Provider value = {{notes,setnotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;