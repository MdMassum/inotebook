import React,{ useState}from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{

  const host = "http://localhost:5000";
  const[notes,setNotes] = useState([]);

  // fetching all notes -->
      const fetchNotes = async()=>{
        try {
          const resp = await fetch(`${host}/api/notes/fetchallnotes`,{
          method: "GET", // *GET, POST, PUT, DELETE, etc.
      
            headers: {
              "Content-Type": "application/json",
              "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0MzJlNGQ1MDlkZjM2YTRjYzUzOTE5In0sImlhdCI6MTcxNTY4MjYyOX0.RcqmIlUqzDGuXJhPxYwhZzP7F5pooaMFUK32SYaV3Q4"
              
            }
        });
        const data = await resp.json();
        setNotes(data);
      }catch (error) {
      console.error("Error fetching notes:", error);
    }
  }

  // Add a Note -->
  const addNote=async(title,description,tag)=>{
    var titl = title[0];     // since the parameters are giving us array we converting it into string for passing in body
    var descript = description[0];
    var ta = tag[0];
 
      try {
        const resp = await fetch(`${host}/api/notes/addnote`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0MzJlNGQ1MDlkZjM2YTRjYzUzOTE5In0sImlhdCI6MTcxNTY4MjYyOX0.RcqmIlUqzDGuXJhPxYwhZzP7F5pooaMFUK32SYaV3Q4"
          },
          body:JSON.stringify({title:titl,description:descript,tag:ta})
      });
      const data = await resp.json();
        const note = {
          "_id":data._id,
          "user": "66432e4d509df36a4cc53919",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2024-05-14T11:37:06.085Z",
          "__v": 0
        }
        setNotes(notes.concat(note));
    } catch (error) {
      console.error("Error adding note:", error);
    }
  }

  // Delete a Note -->
  const deleteNote=async(id)=>{
    try {
        await fetch(`${host}/api/notes/deletenote/${id}`, {

            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0MzJlNGQ1MDlkZjM2YTRjYzUzOTE5In0sImlhdCI6MTcxNTY4MjYyOX0.RcqmIlUqzDGuXJhPxYwhZzP7F5pooaMFUK32SYaV3Q4"
            },
        });

        const newNotes = (notes.filter((note)=>{return note._id !== id}));
        setNotes(newNotes); 

    } catch (error) {
      console.error("Error deleting note:", error);
    }
  }

  // Edit a Note -->
  const editNote=async(id,title,description,tag)=>{
    // since the parameters are giving us array we converting it into string for passing in body
    var titl = title[0];
    var descript = description[0];
    var ta = tag[0];
    try {
      await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0MzJlNGQ1MDlkZjM2YTRjYzUzOTE5In0sImlhdCI6MTcxNTY4MjYyOX0.RcqmIlUqzDGuXJhPxYwhZzP7F5pooaMFUK32SYaV3Q4"
        },
        body: JSON.stringify({title:titl,description:descript,tag:ta})
      });
      // updating in frontend -->
      const newNotes = notes.map((note) =>
        note._id === id ? { ...note, title, description, tag } : note
      );
      setNotes(newNotes);
    } catch (error) {
      console.error("Error editing note:", error);
    } 
  }
    return(
        <NoteContext.Provider value = {{notes,addNote,deleteNote,editNote,fetchNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
