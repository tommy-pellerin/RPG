class Berzerker extends Character {
  constructor(name, hp = 8, dmg = 4, mana = 0, state, hasPlayed) {
    super(name,hp,dmg,mana, state, hasPlayed)
    this.isRaging = false;
  }

  rage(victim) {
    if (this.victimIsAlive(victim)) {
      console.log(`${this.name} is using rage on ${victim.name} !`);
      this.decreaseMana()
      this.isRaging = true; // Set isRaging to true when rage is used
      this.raging();
      this.dealDamage(victim,this.dmg);
      
    } else {
      console.log(`${victim.name} is not in the game or is already dead.`);
    };
  }

  raging() {
    this.dmg += 1 //lui donnant +1 attaque pour tout le reste de la partie mais lui enlevant 1 hp
    console.log(`As he/she is in rage, ${this.name} attack him/herself`);
    this.dealDamage(this,1);
  }
}