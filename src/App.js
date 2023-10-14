import './App.css';
import {useState} from 'react';
const Square=({value,onPlay})=>{
  return (
    <button onClick={onPlay}>{value}</button>
  );
}
function App() {
  const [square,setSquares]=useState(Array(9).fill(null));
  const [xIsSet,setX]=useState(true);
  const handleClick=(index)=>{
    
    if(checkWinner()){
      return;
    }
    const newArr=[...square];

    if(!newArr[index]){
      newArr[index]=(xIsSet?"X":"O");
      setX(!xIsSet);
    }
    
    setSquares(newArr);
  }
  const checkWinner=()=>{
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null
  }
  const winner=checkWinner();
  let status="Current Player : "+(xIsSet?"X":"O");
  if(winner){
    status="Winner is : "+(xIsSet?"O":"X");
  }
  return (
    <>
      <div data-testid="winner-status">{status}</div>
      <div className='table-row'>
      <Square value={square[0]} onPlay={()=>handleClick(0)}/>
      <Square value={square[1]} onPlay={()=>handleClick(1)}/>
      <Square value={square[2]} onPlay={()=>handleClick(2)}/>
      </div>
      <div className='table-row'>
      <Square value={square[3]} onPlay={()=>handleClick(3)}/>
      <Square value={square[4]} onPlay={()=>handleClick(4)}/>
      <Square value={square[5]} onPlay={()=>handleClick(5)}/>
      </div>
      <div className='table-row'>
      <Square value={square[6]} onPlay={()=>handleClick(6)}/>
      <Square value={square[7]} onPlay={()=>handleClick(7)}/>
      <Square value={square[8]} onPlay={()=>handleClick(8)}/>
      </div>
    </>
  );
}

export default App;
