class Character {
  constructor(name, hp, dmg, mana, hasPlayed = false, state = "playing") {
    this.name = name;
    this.hp = hp; //Un personnage commence avec un nombre défini de hp. S'il passe à 0 points de vie, il devient loser
    this.dmg = dmg; //damage
    this.mana = mana; //Un personnage commence le jeu avec un nombre précis de mana qui lui permettront d'effectuer son sortilège spécial (coûtant un certain nombre de mana)
    this.state = state; //par défaut à playing. Il pourra passer à winner ou loser
    this.hasPlayed = hasPlayed
  }
  takeDamage(dmg) {
    this.hp = this.hp - Math.abs(dmg);
    if (this.hp <= 0) {
      this.state = "loser";
    }
  }
  dealDamage(victim,superDmg) {
    // Check if victim is in the players array and is not dead
    const isVictimAlive = game.players.some(player => player.name === victim.name && player.state !== 'loser');

    if (victim && isVictimAlive) {
      if (superDmg) {
        victim.takeDamage(superDmg);
        console.log(`${this.name} is attacking ${victim.name} with special attack. He/she deals him/her ${superDmg} damages.`);
        this.decreaseMana(); //decrease mana here
      } else {
        victim.takeDamage(this.dmg);
        console.log(`${this.name} is attacking ${victim.name}. He/she deals him/her ${this.dmg} damages.`);
      }
      console.log(`${victim.name} got ${victim.hp} lifepoints left.`);
      if (victim.hp <= 0) { 
        victim.state = "loser";
        this.deleteVictim(victim);
      } 
      // After a player has played, set hasPlayed to true
      this.hasPlayed = true;
      console.log("<<< Please click on 'Next Player' button to see who is next");
    } else {
      console.log(`${victim.name} is not in the game or is already dead.`);
    }
      
  }  

  deleteVictim(victim) {
    let victimIndex = game.players.findIndex(player => player.name === victim.name);
    if (victimIndex !== -1) {
      game.players.splice(victimIndex, 1);
    }
    console.log(`${victim.name} is dead`);
  }

  decreaseMana() {
    console.log("Je reduit les mana");
    switch (this.constructor.name) { 
      case "Fighter":
        this.mana = this.mana - 20 //the super attack cost 20 mana
        break;
      case "Paladin":
        this.mana = this.mana - 40 //the super attack cost 20 mana
        break;
      case "Monk":
        this.mana = this.mana - 25 //the super attack cost 20 mana
        break;
      case "Berzerker":
        this.mana = this.mana - 0 //the super attack cost 20 mana
        break;
      case "Assasin":
        this.mana = this.mana - 20 //the super attack cost 20 mana
        break;
      case "Wizard":
        this.mana = this.mana - 25 //the super attack cost 20 mana
        break;
      case "Demon":
        this.mana = this.mana - 20 //the super attack cost 20 mana
        break;
      default:
        // Optional: Perform action for unknown class
        console.log(`${this.name} has an unknown class.`);
    }
  }

}
