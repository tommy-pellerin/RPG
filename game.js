class Game {
  constructor(players, numberOfTurnLeft = 10) {
    this.players = players;
    this.numberOfTurnLeft = numberOfTurnLeft
    // Randomly select player
    this.currentPlayerIndex = Math.floor(Math.random() * this.players.length);
  }

  startTurn() {
    //verify if there is only 1 user, he is the winner or if numberofturnleft reach 0, all player alive are winners
    if (this.players.length <= 1 || this.numberOfTurnLeft <= 0 ) {
      this.end_game()
    } else {
      console.log(`It\'s turn : ${11 - this.numberOfTurnLeft}`);    

      // if (this.currentPlayerIndex < this.players.length) {
      //   let currentPlayer = this.players[this.currentPlayerIndex];
      //   console.log(`It's ${currentPlayer.name}'s turn`);
      // }
      
      // Verify if all players have played
      let allPlayersHavePlayed = this.players.every(player => player.hasPlayed === true);
    
      if (allPlayersHavePlayed) {      
        this.skipTurn()
      } else {
        alert("At least one player has not played, all players have to play, please check stats");
      }
    }
  }
  
  changePlayer() {
    // Verify if all players have played
    let allPlayersHavePlayed = this.players.every(player => player.hasPlayed === true);
  
    if (allPlayersHavePlayed) {
      alert("All players have played, please change turn");
    } else {
      // Verify if there is only 1 user, he is the winner or if numberOfTurnLeft reach 0, all player alive are winners
      if (this.players.length <= 1) {
        this.end_game()
      } else {
        let currentPlayer = this.players[this.currentPlayerIndex];
        if (currentPlayer.hasPlayed === false) {
          console.log(`${currentPlayer.name} has not played`);
        } else {
          if (this.currentPlayerIndex < this.players.length) {
          this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
          let currentPlayer = this.players[this.currentPlayerIndex];
          console.log(`It\'s turn : ${11 - this.numberOfTurnLeft}`);
          console.log(`It's ${currentPlayer.name}'s turn`);
          
          }  
        }            
      }
    }
    
  }  

  skipTurn() {
    this.numberOfTurnLeft -= 1;
    // Move to the next player
    // this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    console.log("im in skipturn");
    // Reset hasPlayed for all players
    this.players.forEach(player => player.hasPlayed = false);
  }

  watchStats() {
    console.log("=".repeat(50));
    console.log("Here are players status :");
    this.players.forEach(player => {
      console.log(player);
    })
    console.log("=".repeat(50));
  }

  end_game() {
    console.log(">>>>> Game Over <<<<<");
    // Filter the players array to only include players with HP greater than 0
    this.players = this.players.filter(player => player.hp > 0);
    // Print the names of the remaining players
    this.players.forEach(player => console.log(`${player.name} is a winner!`));
  }

  startGame() {
    let currentPlayer = this.players[this.currentPlayerIndex];
    console.log(`It\'s turn : ${11 - this.numberOfTurnLeft}`);
    console.log(`It's ${currentPlayer.name}'s turn`);
  }
}