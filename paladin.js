class Paladin extends Character {
  constructor(name, hp = 16, dmg = 3, mana = 160, state, hasPlayed) {
    super(name,hp,dmg,mana, state, hasPlayed)
  }

  healingLighting(victim) {
    if (this.mana >= 40) {
      console.log(`${this.name} is using healingLighting on ${victim.name} !`);
      this.hp = this.hp + 5
      // this.mana = this.mana - 40
      console.log(`${this.name} got ${this.hp} lifepoints left.`);
      this.dealDamage(victim,4);
    } else {
      console.log("Not enough mana to use healingLighting.");
    }
  }
}