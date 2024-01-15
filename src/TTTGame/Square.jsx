import React from 'react'
import Board from "../assets/Board.png"
import o from "../assets/o.png"
import x from "../assets/x.png"


function Square(props) {


  return (
    <div
    className='sqr'
    onClick={props.onClick} 
    style={{
      border:'1px solid',height:"150px",width:"150px"
      , display:"flex", justifyContent:"center",alignItems:"center",cursor:"pointer"
    }}>

    {props.value==="X"?<>

    <img src={x} alt="xxx" style={{width:"100%", height:"100%"}} />
    </>

    :props.value==="O"?<>
<img src={o} alt="ooo" style={{width:"100%", height:"100%"}} />
    
    </>

    :<>
      <img src={Board} alt="baord" style={{width:"100%", height:"100%"}} />
        <div className="square">
            <h5>{props.value}</h5>
        </div>
        </>}
    </div>
  )
}

export default Square