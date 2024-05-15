import React from 'react'

function NoteItem(props) {
  return (
       <div className="card my-2" style={{width: "23rem",border:"none"}}>
            <div className="card-body">
                <h5 className="card-title">{props.elem.title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{props.elem.tag}</h6>
                <p className="card-text">{props.elem.description}.</p>
                <button type="submit" className="btn btn-primary ">Update</button>
                <button type="delete" className="btn btn-danger mx-2">Delete</button>
            </div>
        </div>
  )
}

export default NoteItem