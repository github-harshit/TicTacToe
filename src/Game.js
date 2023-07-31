import React from 'react'; 
import { useState } from 'react';
import Board from './Board.js';
 import styles from "./styles/game.module.css"; 
 import image from "./images/85535e05d1f130b16751c8308cfbb19b.avif";

function Game(props) {
    
    const {mode, setMode} = props; 
    const {next, setNext} = props;

    const handleOne = (event)=> {
       event.preventDefault();
       setMode("ai"); 



    }
     const  handleTwo = (event)=>{ 
        event.preventDefault();
        setMode("human")
     
     }
    let content; 
     if(mode==="ai" && next===false){
      content = <p> It is ai turn </p>
      }else if(mode==="ai" && next===true){
      content = <p> It is player one  turn </p>
      }else if(mode==="human" && next===true){
      content = <p> It is player one  turn </p>
      }else if(mode==="human" && next===false){
      content = <p> It is player two  turn </p>
      }
    
  
  return (

    <>
    <div className={styles.container}>



     <h1 className={styles.mainHeading} > Welcome to the world of tic tac toe </h1>

    <div className={styles.imageContainer}>
      <img src= {image} alt='tic-tac-toe' className={styles.image} />
      </div>
   
     <div> {content} </div>
     <h2 className={styles.mode}> Choose Mode </h2>

     <div className= {styles.btnGroup}>
     <button  className={styles.btn}
      onClick={(e) =>handleOne(e)}> One Player </button>

     
      <button className={styles.btn} onClick={(e)=>handleTwo(e)}>  Two Player </button>
      
       </div>

     
     
    
    
    </div>
    </>
  )
}

export default Game