const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      const { name } = potions[i];
      if (potionName === name) {
        potions.splice(i, 1);
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i++) {
      if (oldName === this.potions[i].name) {
        return (this.potions[i].name = newName);
      }
    }

    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};

console.log(atTheOldToad.getPotions()); // [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })); //"Error! Potion Dragon breath is already in your inventory!"
console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 })); // "Error! Potion Stone skin is already in your inventory!"
console.log(atTheOldToad.removePotion("Dragon breath")); //[ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
console.log(atTheOldToad.removePotion("Speed potion")); // [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth")); //[{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
console.log(
  atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
); // [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]
