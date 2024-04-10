class Monk extends Character {
  constructor(name, hp = 8, dmg = 2, mana = 200, state, hasPlayed) {
    super(name,hp,dmg,mana, state, hasPlayed)
  }

  heal(victim) {
    if (this.mana >= 25) {
      console.log(`${this.name} is using heal on ${victim.name} !`);
      victim.hp = victim.hp + 8
      this.mana = this.mana - 25
      console.log(`${victim.name} got ${victim.hp} lifepoints left.`);
      // After they have played, set hasPlayed to true
      currentPlayer.hasPlayed = true;
    } else {
      console.log("Not enough mana to use heal.");
    }

    
  }
}