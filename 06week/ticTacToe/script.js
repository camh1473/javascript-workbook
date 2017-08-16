'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let playerTurn = "X";


  document.querySelectorAll('[data-cell]').forEach(cell => {
    cell.onclick = function() {
      this.innerText = playerTurn;
      if (playerTurn === "X") {
        playerTurn = "O"
      } else {
        playerTurn = "X"
      }

    }
  })

  
    if (document.querySelector('[data-cell="0"]') &&
        document.querySelector('[data-cell="1"]') &&
    document.querySelector('[data-cell="2"]') === playerTurn) {
        return "Winner"};
  

});
