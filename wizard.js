class Wizard extends Character {
  constructor(name, hp = 10, dmg = 2, mana = 200, state) {
    super(name,hp,dmg,mana, state)
  }

  fireBall(victim) {
    if (this.mana >= 20) {
      console.log(`${this.name} is using fireBall on ${victim.name} !`);
      this.dealDamage(victim,7);      
      this.mana = this.mana - 25

    } else {
      console.log("Not enough mana to use fireBall.");
    }
  }
}