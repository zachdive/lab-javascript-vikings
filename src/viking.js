// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damageAmount) {
    this.health -= damageAmount;
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {;
    super(health, strength);
    this.name = name;
}
receiveDamage(damageAmount) { 
  super.receiveDamage(damageAmount); 
  if (this.health > 0) {
    return (`${this.name} has received ${damageAmount} points of damage`);
} else {
    return(`${this.name} has died in act of combat`);
}
}
battleCry() {
  return "Odin Owns You All!"
}
}

// Saxon
class Saxon extends Soldier {
receiveDamage(damageAmount) { 
  super.receiveDamage(damageAmount); 
  if (this.health > 0) {
    return (`A Saxon has received ${damageAmount} points of damage`);
} else {
    return(`A Saxon has died in combat`);
}
}
}


// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}
  addViking(viking) {
    this.vikingArmy.unshift(viking);
}
  addSaxon(saxon) {
    this.saxonArmy.unshift(saxon)
  }
  vikingAttack() {
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingIndex];
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    let saxonHealth = randomSaxon.receiveDamage(randomViking.attack());
    if (randomSaxon.health <= 0 ) {
        this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return saxonHealth;

  }
  saxonAttack() {
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingIndex];
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    let vikingHealth = randomViking.receiveDamage(randomSaxon.attack());
    if (randomViking.health <= 0 ) {
        this.vikingArmy.splice(randomVikingIndex, 1);
    }
    return vikingHealth;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
    }
    else if (this.vikingArmy.length === 0 ) {
      return "Saxons have fought for their lives and survived another day...";
    }
    else {
    return "Vikings and Saxons are still in the thick of battle." ;
    }
  }
    genericAttack(attackingArmy, defendingArmy){
    let randomAttackingArmyIndex = Math.floor(Math.random() * attackingArmy.length);
    let randomAttackingArmy = this.attackingArmy[randomAttackingArmyIndex];
    let randomDefendingArmyIndex = Math.floor(Math.random() * this.defendingArmy.length);
    let randomDefendingArmy = this.defendingArmy[randomDefendingArmyIndex];
    let defendingArmyHealth = defendingArmy.receiveDamage(randomAttackingArmy());

    if (randomDefendingArmy.health <= 0) {
       this.defendingArmy.splice(randomDefendingArmyIndex , 1);
      }
    return defendingArmyHealth;
   }
}








// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
