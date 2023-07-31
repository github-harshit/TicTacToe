import React from 'react';
 import styles from "./styles/square.module.css"


function Square(props) {
  const {value, handleClick} = props; 
   console.log(handleClick)
 
  return (
    <div>
      <button className={styles.square} onClick={handleClick}> {value}  </button>

    </div>
    
  )
}

export default Square; 