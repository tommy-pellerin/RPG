class Demon extends Character {
  constructor(name, hp = 20, dmg = 3, mana = 60, state) {
    super(name,hp,dmg,mana, state)
  }

  bloodMeteor(victim) { 
    if (this.mana >= 20) {
      console.log(`${this.name} is using bloodMeteor on ${victim.name} !`);
      this.dealDamage(victim,6);
      console.log(`As the attack is uncontrollable, ${this.name} attack him/herself !`);
      this.dealDamage(this,5) //the super attack tuch the owner and decrease it hp by 5 lifepoints      
      this.mana = this.mana - 20 //the super attack cost 20 mana

    } else {
      console.log("Not enough mana to use bloodMeteor.");
    }
  }
}