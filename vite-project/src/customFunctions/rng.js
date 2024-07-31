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
function generateWeaponAndArmor(fighter,arrayWithWeapons,arrayWithArmors){
    const randomWeapon = Math.floor(Math.random() * arrayWithWeapons.length);
    const randomArmor = Math.floor(Math.random() * arrayWithArmors.length);
    const objectOf3 = {fighter,weapon:arrayWithWeapons[randomWeapon],armor:arrayWithArmors[randomArmor]}
    return objectOf3
}
function statsCalculator(fighter1,fighter2){
    let totalStatsOfFighter1 = 0
    let totalStatsOfFighter2 = 0
    totalStatsOfFighter1 = Number(fighter1.fighter.stats.attack) + Number(fighter1.fighter.stats.defense) + Number(fighter1.fighter.stats.speed) + Number(fighter1.fighter.stats.intelligence) + Number(fighter1.fighter.stats.health)
    totalStatsOfFighter2 = Number(fighter2.fighter.stats.attack) + Number(fighter2.fighter.stats.defense) + Number(fighter2.fighter.stats.speed) + Number(fighter2.fighter.stats.intelligence) + Number(fighter2.fighter.stats.health)
    
    console.log(totalStatsOfFighter1)
    console.log(totalStatsOfFighter2)
}

const rng = {
    generateRandomFighterOrItem,
    generateWeaponAndArmor,
    generateAll,
    statsCalculator
}

export default rng