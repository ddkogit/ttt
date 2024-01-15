import React from 'react'

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

    <img src="src\assets\X.png" alt="asd" style={{width:"100%", height:"100%"}} />
    </>

    :props.value==="O"?<>
<img src="src\assets\O.png" alt="asd" style={{width:"100%", height:"100%"}} />
    
    </>

    :<>
      <img src="src\assets\Board.png" alt="asd" style={{width:"100%", height:"100%"}} />
        <div className="square">
            <h5>{props.value}</h5>
        </div>
        </>}
    </div>
  )
}

export default Square