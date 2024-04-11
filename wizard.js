class Wizard extends Character {
  constructor(name, hp = 10, dmg = 2, mana = 200, state, hasPlayed) {
    super(name,hp,dmg,mana, state, hasPlayed)
  }

  fireBall(victim) {
    if (this.mana >= 20) {
      if (this.victimIsAlive(victim)) {
        console.log(`${this.name} is using fireBall on ${victim.name} !`);
        console.log("🔥🔥🔥🔥🔥🔥🔥");
        this.decreaseMana()
        // this.mana = this.mana - 25
        this.dealDamage(victim,7);      
      } else {
        console.log(`${victim.name} is not in the game or is already dead.`);
      };

    } else {
      console.log("Not enough mana to use fireBall.");
    }
  }
}