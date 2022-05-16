const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  // mana: 14,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  return Math.round(Math.random() * (dragon.strength - 15)) + 15;
}
// console.log('dragondamage:' + dragonDamage());

const warriorDamage = () => {
  const warriorStrength = warrior.strength;
  const warriorWeaponDamage = warriorStrength * warrior.weaponDmg;
  return Math.round(Math.random() * (warriorWeaponDamage - warriorStrength)) + warriorStrength;
}
// console.log('warriordamage:' + warriorDamage());

const mageDamageAndManaWaste = () => {
  let mageDamage = Math.round(Math.random() * ((mage.intelligence * 2) - mage.intelligence)) + mage.intelligence;
  const initialMana = mage.mana;
  let manaWaste = 0;

  if (initialMana < 15) {
    manaWaste = 0;
    mageDamage = 'Não possui mana suficiente';
  } else {
    manaWaste = 15;
  }

  return { 
    damage: mageDamage,
    manaWaste: manaWaste
  }
}
// console.log(mageDamageAndManaWaste());

const gameActions = {
  warriorTurn: (callback) => {
    let warriorAttack = callback();
    dragon.healthPoints = dragon.healthPoints - warriorAttack;
    warrior.damage = warriorAttack;
  },
  mageTurn: (callback) => {
    let mageAttack = callback();
    dragon.healthPoints = dragon.healthPoints - mageAttack.damage;
    mage.damage = mageAttack.damage;
    mage.mana = mage.mana - mageAttack.manaWaste;
  },
  dragonTurn: (callback) => {
    let dragonAttack = callback();
    mage.healthPoints = mage.healthPoints - dragonAttack;
    warrior.healthPoints = mage.healthPoints - dragonAttack;
    dragon.damage = dragonAttack;
  },
  endOfTurn: () => battleMembers,
}

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamageAndManaWaste);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.endOfTurn());