import React,{ useState}from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{

  const {showAlert} = props;

  // const host = "http://localhost:5000";
  const host = "https://massum-inotebook.netlify.app"
  const[notes,setNotes] = useState([]);


  // fetching all notes -->
      const fetchNotes = async()=>{
        try {
          const resp = await fetch(`${host}/api/notes/fetchallnotes`,{
          method: "GET", // *GET, POST, PUT, DELETE, etc.
      
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem('token')
              
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
            "auth-token":localStorage.getItem('token')
          },
          body:JSON.stringify({title:titl,description:descript,tag:ta})
      });
      const note = await resp.json();
      showAlert("success","Note Added Successfully");
      setNotes(notes.concat(note));
    } catch (error) {
      showAlert("error","Some Error Occured");
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
              "auth-token":localStorage.getItem('token')
            },
        });
        showAlert("success","Note Deleted Successfully");
        const newNotes = (notes.filter((note)=>{return note._id !== id}));
        setNotes(newNotes); 

    } catch (error) {
      showAlert("error","Some Error Occured");
      console.error("Error deleting note:", error);
    }
  }

  // Edit a Note -->
  const editNote=async(id,title,description,tag)=>{
    // since the parameters are giving us array we converting it into string for passing in body
    var titl = String(title);
    var descript = String(description);
    var ta = String(tag);
    console.log(titl,descript,ta);
    console.log(id,title,description,tag);
    try {
      await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
        body: JSON.stringify({title:titl,description:descript,tag:ta})
      });
      // updating in frontend -->
      showAlert("success","Note Edited Successfully");
      const newNotes = notes.map((note) =>
        note._id === id ? { ...note, title, description, tag } : note
      );
      setNotes(newNotes);
    } catch (error) {
      showAlert("error","Some Error Occured");
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
