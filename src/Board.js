import React from 'react'; 
import Square from './Square.js';
import {useState} from 'react';
import {minimax} from './minimax.js';
import styles from './styles/board.module.css';





export let ai = 'O';
export let human = 'X';
const playerOne = 'X';; 
const playerTwo = 'O';
 let turn; 
  let status; 



// next true means human turn in one player game  and next false means AI turn 
// next true means player one turn in two player game  and next false means player two turn


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const x = [
  [0, 1, 2], 
  [3, 4, 5],
  [6, 7, 8],
  [0, 3 ,6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4 ,8],
  [2, 4, 6],
]

export function calculateWinner(squares){


  for (let i = 0; i < x.length; i++) {
      const [a, b, c] =x[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    for(let i=0;i<9;i++){
        if(squares[i]===null){
            return null;
        }
    }
    
    return 'tie';
  
     
}

export function Board(props) {
     const {board, setBoard} = props; 
     const {next,  setNext} = props; 
      const {mode, setMode} = props;
     
      console.log("from board mode is ");
      console.log(mode);
     
 
    function handleClick(index, event){
      event.preventDefault();
         if(board[index] || calculateWinner(board)){
            // the point of calling calculate winner here is just to avoid clicks when the game is over 
             return; 

         }
         console.log("handle click is called"); 
         const newBoard =  [...board];
          if(next===true && mode==="ai"){
               newBoard[index] = human;
          }else if(next==true && mode=='human'){
              newBoard[index] = playerOne;

          }else if(next==false && mode=='human'){
            newBoard[index] = playerTwo;
          }
       
      
        setBoard(newBoard);
        setNext(!next);
       
        
    }
    
  
   
  
  


  if( next===false && mode==="ai"){
 playAI(); 

 
 }


 async function playAI() {
    console.log("playtAI is called"); 
    await delay(1000); 
    console.log("playtAI is delayed"); 
    bestMove();

 }
  function handleRestart() { 
    window.location.reload()
  }


 function bestMove() {
    let sample = [...board]
    // AI to make its turn
    let bestScore = -Infinity;
    let move;

    for (let i = 0; i < 9; i++) {
     
        // Is the spot available?
        if (sample[i] === null) {
          sample[i] = ai;
          let score = minimax(sample, 0, false);
          sample[i] = null;
          if (score > bestScore) {
            bestScore = score;
            move =  i;
          }
        }
      
    }
    if(move===undefined){
        return; 
    }
    sample[move] = ai;
    setNext(true); 
    setBoard(sample);
   
  }

  const winner = calculateWinner(board); 
  // Calculating turn 
  if(mode==="ai"){
    if(next===true){
        turn = "Player  Turn"
    }else{
        turn = "AI Turn"
    }
  }else if(mode==="human"){
    if(next===true){
        turn = "Player One Turn"
    }else{
        turn = "Player Two Turn"
    }
  }

  // Calculating status 
  // calculate winner has four possible return values
  // X O tie null
  // we have to return only if one wins or tie so it comes down to 3 

 
   if(mode==="ai" && winner==='X '){
    status= 'Player One wins '
   }else if(mode==='ai' && winner==='O'){
     status = "AI wins"
   }else if(mode==="ai" && winner==="tie"){
     status = "It's tie "
   }
   else if(mode==="human" && winner==='X'){
     status = 'Player One wins '
   }else if(mode==="human"  && winner==='O'){
     status  = "Player Two wins"
   }else if(mode==="human" && winner==="tie"){
     status = "It is a  tie"
   }

  return (

   <>
 
    
    
   <div  className={styles.board} >
   {status ? <h1 className={styles.status } > {status} </h1> :  <h1 className={styles.turn}>{turn}</h1>  } 
   <div className={styles.outline}>
    <Square value={board[0]} handleClick={(e)=>handleClick(0, e)}/>
    <Square value={board[1]}  handleClick={(e)=>handleClick(1, e)}/>
    <Square  value={board[2]}  handleClick={(e)=>handleClick(2, e)}/>
    
   </div>
   <div className= {styles.outline}>
    <Square  value={board[3]} handleClick={(e)=>handleClick(3,e)}/>
    <Square  value={board[4]} handleClick={(e)=>handleClick(4,e)}/>
    <Square  value={board[5]} handleClick={(e)=>handleClick(5,e)}/>
    
   </div>
   <div className= {styles.outline}>
    <Square  value={board[6]} handleClick={(e)=>handleClick(6,e)}/>
    <Square  value={board[7]} handleClick={(e)=>handleClick(7,e)}/>
    <Square  value={board[8]} handleClick={(e)=>handleClick(8,e)}/>
    
   </div>

   {status ?  <button className={styles.btn} onClick={handleRestart} > Play Again </button> : null }

    </div>
   
   </>
  )
}

export default Board