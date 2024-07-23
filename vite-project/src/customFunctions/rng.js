function generateRandomFighterOrItem(arrayWithFightersOrItems){
    const randomNumber = Math.floor(Math.random() * arrayWithFightersOrItems.length);
    return arrayWithFightersOrItems[randomNumber]
}
function generateAll(arrayWithFighters,arrayWithWeapons,arrayWithArmors){
    const randomFighter = Math.floor(Math.random() * arrayWithFighters.length);
    const randomWeapon = Math.floor(Math.random() * arrayWithWeapons.length);
    const randomArmor = Math.floor(Math.random() * arrayWithArmors.length);
    const objectOf3 = {fighter:arrayWithFighters[randomFighter],weapon:arrayWithWeapons[randomWeapon],armor:arrayWithArmors[randomArmor]}
    return objectOf3
}

const rng = {
    generateRandomFighterOrItem,
    generateAll
}

export default rng