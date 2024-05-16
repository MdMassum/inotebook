import React from 'react'

export default function Alert(props) {
  return (
    <div className="my-20px" style={{height:'50px'}}>
    {props.alert && <div className={`" alert alert-${props.alert.type} alert-dismissible fade show my-2"`} role="alert">
      <strong>{props.alert.type}</strong>
        {props.alert.msg}
    </div>}
    </div>

  )
}
