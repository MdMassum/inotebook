import React from 'react'

function NoteItem(props) {
  return (
    
       <div className="card m-2 d-flex align-item-center" style={{width: "19rem",border:"1px solid black"}}>
            <div className="card-body" >
            <div >
            <b className="card-title">{props.elem.title}</b>
            <i className="fa-solid fa-trash m-2"></i>
            <i className="fa-solid fa-pen-to-square m-2"></i>
            </div>
                
                <h6 className="card-subtitle mb-2 text-body-secondary mx-3">{props.elem.tag}</h6>
                <p className="card-text mx-3">{props.elem.description}.</p>
                
            </div>
            
            
        </div>
  )
}

export default NoteItem