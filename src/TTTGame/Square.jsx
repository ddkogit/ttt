import React from 'react'

function Square(props) {
  return (
    <div
    onClick={props.onClick} 
    style={{
      border:'1px solid',height:"100px",width:"100%"
      , display:"flex", justifyContent:"center",alignItems:"center",cursor:"pointer"
    }}>
        <div className="square">
            <h5>{props.value}</h5>
        </div>
    </div>
  )
}

export default Square