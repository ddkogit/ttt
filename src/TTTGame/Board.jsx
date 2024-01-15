import React, { useEffect, useState } from "react";
import Square from "./Square";

function Board() {



  const [state, setState] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [track,setTrack]=useState([]);

  const handleClick = (index) => {

    if(state[index]!=null){
        return;
    }

    
    const copyState = [...state];
    
    setTrack(prevTrack=>[...prevTrack,index]);
    console.log(track);


    copyState[index] = isX ? "X" : "O";

    setIsX(!isX);
    setState(copyState);
  };
  
  const checkWinner=()=>{
    const  winnerLogic =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let logic of winnerLogic){
            const [a,b,c]=logic;

            if(state[a]!==null && state[a]===state[b] && state[a]===state[c]){
                return state[a];
            }

    }
  }

  const checkDraw =()=>{
    let count=0;
    for (let item of state){
            if(item!==null){
                count++
            }

            if(count===9){
                return "draw"
            }
    }
  }


  const handleUndo=()=>{

    console.log(track[track.length-1]);
    const newArr = [...state];
       
  newArr[track[track.length-1]]=null;
    track.pop();

    setState(newArr)
  
    setIsX(!isX);


  }



 
  const resetGame=()=>{
    setState(Array(9).fill(null));
    setTrack([])
    
  }

  const isWinner = checkWinner();
  const isDraw = checkDraw();



  return (

    <div>
      <div className="board-container">

      {isDraw?<><p>Game is Draw </p>
      <button onClick={resetGame}>Play Again</button></>: <>
     { isWinner? <>{isWinner} won the game <button onClick={resetGame}>
        play again</button> </>:  <>
        <h4>Player {isX ? "X" : "O"} turn</h4>
        <div className="board-row">
          <Square onClick={() => handleClick(0)} value={state[0]} />
          <Square onClick={() => handleClick(1)} value={state[1]} />
          <Square onClick={() => handleClick(2)} value={state[2]} />
        </div>
        <br></br>
        <br></br>
        <div className="board-row">
          <Square onClick={() => handleClick(3)} value={state[3]} />
          <Square onClick={() => handleClick(4)} value={state[4]} />
          <Square onClick={() => handleClick(5)} value={state[5]} />
        </div>
        <br></br>
        <br></br>
        <div className="board-row">
          <Square onClick={() => handleClick(6)} value={state[6]} />
          <Square onClick={() => handleClick(7)} value={state[7]} />
          <Square onClick={() => handleClick(8)} value={state[8]} />
        </div>

        <button onClick={handleUndo}>
            Undo
        </button>
        <button onClick={resetGame}>
            Reset
        </button>
        </>}
        </>}
      </div>
    </div>
  );
}


export default Board;
