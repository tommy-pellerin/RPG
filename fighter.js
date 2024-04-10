class Fighter extends Character {
  constructor(name, hp = 12, dmg = 4, mana = 40, state, hasPlayed) {
    super(name,hp,dmg,mana, state, hasPlayed);    
  }

  darkVision(victim) {
    if (this.mana >= 20) {
      if (this.victimIsAlive(victim)) {
        console.log(`${this.name} is using darkVision on ${victim.name} !`);
        // this.mana = this.mana - 20;
        this.decreaseMana()
        this.dealDamage(victim,5);
        this.dmgReduction = 2; // Store the damage reduction for the next turn
      } else {
        console.log(`${victim.name} is not in the game or is already dead.`);
      };
    } else {
      console.log("Not enough mana to use darkVision.");
    }
  }
  
  takeDamage(dmg) {
    super.takeDamage(dmg - (this.dmgReduction || 0)); // Use the damage reduction if it's set
    this.dmgReduction = 0; // Reset the damage reduction after it's been used
  }

}