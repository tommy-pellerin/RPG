class Paladin extends Character {
  constructor(name, hp = 16, dmg = 3, mana = 160, state, hasPlayed) {
    super(name,hp,dmg,mana, state, hasPlayed)
  }

  healingLighting(victim) {
    if (this.mana >= 40) {
      if (this.victimIsAlive(victim)) {
        console.log(`${this.name} is using healingLighting on ${victim.name} !`);
        // this.mana = this.mana - 40
        this.decreaseMana()
        this.hp = this.hp + 5
        console.log(`${this.name} heal his/herself of 5 hp and got ${this.hp} lifepoints left.`);
        this.dealDamage(victim,4);
      } else {
        console.log(`${victim.name} is not in the game or is already dead.`);
      };
    } else {
      console.log("Not enough mana to use healingLighting.");
    }
  }
}