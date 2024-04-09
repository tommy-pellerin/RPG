class Character {
  constructor(name, hp, dmg, mana, state = "playing") {
    this.name = name;
    this.hp = hp; //Un personnage commence avec un nombre défini de hp. S'il passe à 0 points de vie, il devient loser
    this.dmg = dmg; //damage
    this.mana = mana; //Un personnage commence le jeu avec un nombre précis de mana qui lui permettront d'effectuer son sortilège spécial (coûtant un certain nombre de mana)
    this.state = state; //par défaut à playing. Il pourra passer à winner ou loser
  }
  takeDamage(dmg) {
    this.hp = this.hp - Math.abs(dmg);
    if (this.hp <= 0) {
      this.state = "loser";
    }
  }
  dealDamage(victim,superDmg) {
    if (superDmg) {
      victim.takeDamage(superDmg);
      console.log(`${this.name} is attacking ${victim.name}. He/she deals him/her ${superDmg} damages.`);
    } else {
      victim.takeDamage(victim.dmg);
      console.log(`${this.name} is attacking ${victim.name}. He/she deals him/her ${victim.dmg} damages.`);
    }
    console.log(`${victim.name} got ${victim.hp} lifepoints left.`);
    if (victim.hp <= 0) { 
      _deleteVictim(victim)
    } 
    alert("<<< Please click on \'Continue\' to know who's turn it is.")
  }  

  private

  _deleteVictim(victim) {
    let victimIndex = game.players.findIndex(player => player.name === victim.name);
    if (victimIndex !== -1) {
      game.players.splice(victimIndex, 1);
    }
    console.log(`${victim.name} is dead`);
  }

}

class Fighter extends Character {
  constructor(name, hp = 12, dmg = 4, mana = 40, state) {
    super(name,hp,dmg,mana, state);    
  }

  darkVision(victim) {
    if (this.mana >= 20) {
      console.log(`${this.name} is using darkVision on ${victim.name} !`);
      this.dealDamage(victim,5);
      this.mana = this.mana - 20;
      this.dmgReduction = 2; // Store the damage reduction for the next turn
    } else {
      console.log("Not enough mana to use darkVision.");
    }
  }
  
  takeDamage(dmg) {
    super.takeDamage(dmg - (this.dmgReduction || 0)); // Use the damage reduction if it's set
    this.dmgReduction = 0; // Reset the damage reduction after it's been used
  }

}

class Paladin extends Character {
  constructor(name, hp = 16, dmg = 3, mana = 160, state) {
    super(name,hp,dmg,mana, state)
  }

  healingLighting(victim) {
    if (this.mana >= 40) {
      console.log(`${this.name} is using healingLighting on ${victim.name} !`);
      this.hp = this.hp + 5
      this.mana = this.mana - 40
      console.log(`${this.name} got ${this.hp} lifepoints left.`);
      this.dealDamage(victim,4);
    } else {
      console.log("Not enough mana to use healingLighting.");
    }
  }
}

class Monk extends Character {
  constructor(name, hp = 8, dmg = 2, mana = 200, state) {
    super(name,hp,dmg,mana, state)
  }

  heal(victim) {
    if (this.mana >= 25) {
      console.log(`${this.name} is using heal on ${victim.name} !`);
      victim.hp = victim.hp + 8
      this.mana = this.mana - 25
      console.log(`${victim.name} got ${victim.hp} lifepoints left.`);
      alert("<<< Please click on \'Continue\' to know who's turn it is.")
    } else {
      console.log("Not enough mana to use heal.");
    }

    
  }
}

class Berzerker extends Character {
  constructor(name, hp = 8, dmg = 4, mana = 0, state) {
    super(name,hp,dmg,mana, state)
  }

  rage(victim) {
    console.log(`${this.name} is using rage on ${victim.name} !`);
    this.dmg = this.dmg + 1 //lui donnant +1 attaque pour tout le reste de la partie mais lui enlevant 1 hp
    this.dealDamage(victim,this.dmg);
    this.hp = this.hp - 1
  }
}

class Assassin extends Character {
  constructor(name, hp = 6, dmg = 6, mana = 20, state) {
    super(name,hp,dmg,mana, state)
  }

  shadowHit(victim) { //lui permettant de ne pas prendre de dégâts lors du prochain tour
    if (this.mana >= 20) {
      console.log(`${this.name} is using shadowHit on ${victim.name} !`);
      this.dealDamage(victim,7);
      if (victim.stat !== "loser") {
        this.hp = -7 //si l'adversaire n'est pas mort, l'assassin perdra 7 dégâts à son tour.
      }
      this.mana = this.mana - 20

    } else {
      console.log("Not enough mana to use shadowHit.");
    }
  }
}

class Game {
  constructor(players, numberOfTurnLeft = 10) {
    this.players = players;
    this.numberOfTurnLeft = numberOfTurnLeft
    // Randomly select the first player
    this.currentPlayerIndex = Math.floor(Math.random() * this.players.length);
  }

  startTurn() {

    if (this.numberOfTurnLeft <= 0) {
      console.log(">>>>> Game Over <<<<<");
      // Filter the players array to only include players with HP greater than 0
      this.players = this.players.filter(player => player.hp > 0);
      // Print the names of the remaining players
      this.players.forEach(player => console.log(`${player.name} is a winner!`));
    } else {
      console.log(`It\'s turn : ${11 - this.numberOfTurnLeft}`);
      console.log(`It's ${this.players[this.currentPlayerIndex].name}'s turn`);

      this.skipTurn()
    }
  }

  skipTurn() {
    this.numberOfTurnLeft -= 1;
    // Move to the next player
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
  }

  watchStats() {
    console.log("=".repeat(50));
    console.log("Here are players status :");
    this.players.forEach(player => {
      console.log(player);
    })
    console.log("=".repeat(50));
  }
}

const grace = new Fighter('Grace')
const ulder = new Paladin('Ulder')
const moana = new Monk('Moana')
const draven = new Berzerker('Draven')
const carl = new Assassin('Carl')

const game = new Game([grace, ulder, moana, draven, carl]);

let gameTurn = document.getElementById('gameTurn')
// console.log(gameTurn);
gameTurn.addEventListener('click', 
  function(){
    game.watchStats();
    game.startTurn();
    gameTurn.innerHTML = "Continue";
  }
);