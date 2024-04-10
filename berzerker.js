class Berzerker extends Character {
  constructor(name, hp = 8, dmg = 4, mana = 0, state, hasPlayed) {
    super(name,hp,dmg,mana, state, hasPlayed)
  }

  rage(victim) {
    console.log(`${this.name} is using rage on ${victim.name} !`);
    this.dmg = this.dmg + 1 //lui donnant +1 attaque pour tout le reste de la partie mais lui enlevant 1 hp
    this.dealDamage(victim,this.dmg);
    console.log(`As he/she is in rage, ${this.name} attack him/herself`);
    this.dealDamage(this,1);
  }
}