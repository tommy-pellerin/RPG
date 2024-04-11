class Monk extends Character {
  constructor(name, hp = 8, dmg = 2, mana = 200, state, hasPlayed) {
    super(name,hp,dmg,mana, state, hasPlayed)
  }

  heal(victim) {
    if (this.mana >= 25) {
      if (this.victimIsAlive(victim)) {
        console.log(`${this.name} is using heal on ${victim.name} !`);
        console.log("💖💖💖💖💖💖💖💖");
        victim.hp = victim.hp + 8
        // this.mana = this.mana - 25
        this.decreaseMana()
        console.log(`${victim.name} got ${victim.hp} lifepoints left.`);
        // After a player has played, set hasPlayed to true
        this.hasPlayed = true;
        console.log("<<< Please click on 'Next Player' button to see who is next");
      } else {
        console.log(`${victim.name} is not in the game or is already dead.`);
      };
    } else {
      console.log("Not enough mana to use heal.");
    }

    
  }
}