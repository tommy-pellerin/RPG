class Assassin extends Character {
  constructor(name, hp = 6, dmg = 6, mana = 20, state, hasPlayed) {
    super(name,hp,dmg,mana, state, hasPlayed)
  }

  shadowHit(victim) { //lui permettant de ne pas prendre de dégâts lors du prochain tour
    if (this.mana >= 20) {
      if (this.victimIsAlive(victim)) {
        console.log(`${this.name} is using shadowHit on ${victim.name} !`);
        console.log("🥷🥷🥷🥷🥷🥷🥷");
        this.decreaseMana()
        // this.mana = this.mana - 20
        this.dealDamage(victim,7);
        if (victim.state !== "loser") {
          console.log(`${victim.name} is not dead, ${this.name} attack him/herself`);
          console.log("🥷🥷🥷🥷🥷🥷🥷");
          this.dealDamage(this,7) //si l'adversaire n'est pas mort, l'assassin perdra 7 dégâts à son tour.
        }
      } else {
        console.log(`${victim.name} is not in the game or is already dead.`);
      };
    } else {
      console.log("Not enough mana to use shadowHit.");
    }
  }
}