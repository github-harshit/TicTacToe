
import {ai, human} from './Board.js';
import {calculateWinner} from './Board.js';
const scores={
    X:-10,
    O:+10,
    tie:0
}

export function minimax(board, depth, isMaximizing) {
    console.log(board);
   
    let result = calculateWinner(board);
    if (result !== null) {
      return scores[result];
    }
  
    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
       
          // Is the spot available?
          if (board[i] ===null) {
            board[i] = ai;
            let score = minimax(board, depth + 1, false);
            board[i] = null;
            bestScore = Math.max(score, bestScore);
          }
        
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
       
          // Is the spot available?
          if (board[i] === null) {
            board[i] = human;
            let score = minimax(board, depth + 1, true);
            board[i] = null;
            bestScore = Math.min(score, bestScore);
          }
        
      }
      return bestScore;
    }
}