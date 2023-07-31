
import React from "react";
 import Game from "./Game.js";
  import { useState } from 'react';
  import{Board} from './Board.js';




 function App() {
  const [mode, setMode] = useState(null); 
  const [next, setNext] = useState(true);
  const [board, setBoard] = useState(Array(9).fill( null)) ;
  const[status, setStatus] = useState(null); 
   console.log("from app mode is ");
   console.log(mode); 
  return (
    <>

{mode ? <Board next={next} setNext={setNext} board= {board} setBoard = {setBoard} mode={mode} setMode= {setMode} status = {status} setStatus = {setStatus}  /> : <Game mode = {mode} setMode={setMode}  next={next} setNext={setNext} />}
     </>
     
  )
      

    
  }



 export  default App; 
