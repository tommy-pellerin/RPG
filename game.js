class Game {
  constructor(players, numberOfTurnLeft = 10) {
    this.players = players;
    this.numberOfTurnLeft = numberOfTurnLeft
    // Randomly select player
    this.currentPlayerIndex = Math.floor(Math.random() * this.players.length);
    this.currentPlayer = this.players[this.currentPlayerIndex];
  }

  startTurn() {
    this.deletePLayer() //delete all players that have state "loser"
    //verify if there is only 1 user, he is the winner or if numberofturnleft reach 0, all player alive are winners
    if (this.players.length <= 1 || this.numberOfTurnLeft <= 0 ) {
      this.end_game()
    } else {
      let allPlayersHavePlayed = this.players.every(player => player.hasPlayed === true);
    
      if (allPlayersHavePlayed) {      
        this.skipTurn()
      } else {
        alert("At least one player has not played, all players have to play, please check stats");
      }
      console.log(`It\'s turn : ${11 - this.numberOfTurnLeft}`); 
      console.log("Please click on 'Next turn' to see who is playing") 

      // if (this.currentPlayerIndex < this.players.length) {
      //   let currentPlayer = this.players[this.currentPlayerIndex];
      //   console.log(`It's ${currentPlayer.name}'s turn`);
      // }
      
      // Verify if all players have played
    }
  }
  
  changePlayer() {
    this.deletePLayer() //delete all players that have state "loser"
    console.log(".".repeat(100));
    // Verify if all players have played
    // console.log("im in changePlyer method");
    if (this.players.length <= 1) {
      // Verify if there is only 1 user, he is the winner or if numberOfTurnLeft reach 0, all player alive are winners
      this.end_game()
    } else {
      let allPlayersHavePlayed = this.players.every(player => player.hasPlayed === true); // check if all players have played
      
      if (allPlayersHavePlayed) {
        console.log("All players have played, please change turn");
        alert("All players have played, please change turn");
      } else {   
        // if is user, user must play
        if (!this.currentPlayer.hasPlayed) {
          console.log(`>>> It's ${this.currentPlayer.name}'s turn`);
          if (this.currentPlayer !== user) { //if is AI auto play
              this.autoPLay();
            }
        } else {
          this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
          this.currentPlayer = this.players[this.currentPlayerIndex];
          console.log(`***** It\'s turn : ${11 - this.numberOfTurnLeft} *****`);
          console.log(`>>> It's ${this.currentPlayer.name}'s turn`);
          // Check if currentPlayer is an instance of Berzerker and is in rage
          if (this.currentPlayer instanceof Berzerker && this.currentPlayer.isRaging) {
            this.currentPlayer.raging();
          }
          if (this.currentPlayer !== user) { //if is AI auto play
            this.autoPLay();
          }
          
        }
      }
    }
    
  }  

  skipTurn() {
    this.numberOfTurnLeft -= 1;
    // Move to the next player
    // this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    // Reset hasPlayed for all players
    this.players.forEach(player => player.hasPlayed = false);
  }

  watchStats() {
    this.deletePLayer() //delete all players that have state "loser"
    console.log(".".repeat(100));
    console.log("Here are players status :");
    this.players.forEach(player => {
      console.log(player);
    })
    console.log("=".repeat(50));
  }

  deletePLayer(){
    return this.players = this.players.filter(player => player.state !== "loser")
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
    // console.log(`It's ${currentPlayer.name}'s turn`);
    this.changePlayer();
  }

  autoPLay() {
    // console.log("Im in auto play");
    //create an array of victim to filter the player in order to avoid atacking itself
    let victims = this.players.filter(player => player !== this.currentPlayer);
    //generate random victim !!! be careful can't heal itself
    let victimIndex = Math.floor(Math.random() * victims.length);
    let victim = victims[victimIndex];
    if (this.currentPlayer.enoughMana()) {
      // console.log("Mana is enough >> superAttack");
      // console.log(this.currentPlayer);
      // console.log(this.currentPlayer.constructor.name);
      switch (this.currentPlayer.constructor.name) { 
        case "Fighter":
          this.currentPlayer.darkVision(victim);
          break;
        case "Paladin":
          this.currentPlayer.healingLighting(victim);
          break;
        case "Monk":
          this.currentPlayer.heal(victim);
          break;
        case "Berzerker":
          this.currentPlayer.rage(victim);
          break;
        case "Assassin":
          this.currentPlayer.shadowHit(victim);
          break;
        case "Wizard":
          this.currentPlayer.fireBall(victim);
          break;
        case "Demon":
          this.currentPlayer.bloodMeteor(victim);
          break;
        default:
          // Optional: Perform action for unknown class
          console.log(`${this.name} has an unknown class.`);
      };
    } else {
      this.currentPlayer.dealDamage(victim)
    };
  }
}