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
      victim.takeDamage(this.dmg);
      console.log(`${this.name} is attacking ${victim.name}. He/she deals him/her ${this.dmg} damages.`);
    }
    console.log(`${victim.name} got ${victim.hp} lifepoints left.`);
    if (victim.hp <= 0) { 
      victim.state = "loser";
      this.deleteVictim(victim);
    } 
    // alert("<<< Please click on \'Continue\' to know who's turn it is.")
  }  

  deleteVictim(victim) {
    let victimIndex = game.players.findIndex(player => player.name === victim.name);
    if (victimIndex !== -1) {
      game.players.splice(victimIndex, 1);
    }
    console.log(`${victim.name} is dead`);
  }

}
