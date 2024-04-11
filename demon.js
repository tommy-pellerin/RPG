class Demon extends Character {
  constructor(name, hp = 20, dmg = 3, mana = 60, state, hasPlayed) {
    super(name,hp,dmg,mana, state, hasPlayed)
  }

  bloodMeteor(victim) { 
    if (this.enoughMana()) {
      if (this.victimIsAlive(victim)) {
        console.log(`${this.name} is using bloodMeteor on ${victim.name} !`);
        console.log("☄️☄️☄️☄️☄️☄️☄️☄️");
        this.decreaseMana()
        // this.mana = this.mana - 20 //the super attack cost 20 mana
        this.dealDamage(victim,8);
        console.log(`As the attack is uncontrollable, ${this.name} attack him/herself !`);
        console.log("☄️☄️☄️☄️☄️☄️☄️☄️");
        this.dealDamage(this,5) //the super attack touch the owner and decrease it hp by 5 lifepoints      

      } else {
        console.log(`${victim.name} is not in the game or is already dead.`);
      };

    } else {
      console.log("Not enough mana to use bloodMeteor.");
    };
  };
}