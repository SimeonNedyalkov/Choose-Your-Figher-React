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
function statsCalculator(ofjectOf3){
    let total = 0
    const totalStatsOfFighter = Number(ofjectOf3.fighter.stats.attack) + Number(ofjectOf3.fighter.stats.defense) + Number(ofjectOf3.fighter.stats.speed) + Number(ofjectOf3.fighter.stats.intelligence) + Number(ofjectOf3.fighter.stats.health) 
    total+=totalStatsOfFighter

    const totalStatsOfWeapon = Number(ofjectOf3.weapon.stats.attack) + Number(ofjectOf3.weapon.stats.defense) + Number(ofjectOf3.weapon.stats.speed) + Number(ofjectOf3.weapon.stats.intelligence) 
    if(ofjectOf3.fighter.element == ofjectOf3.weapon.element){
        total+=totalStatsOfWeapon * 1.2
    }else{
        total+=totalStatsOfWeapon
    }
    
    const totalStatsOfArmor = Number(ofjectOf3.armor.stats.health) + Number(ofjectOf3.armor.stats.defense) + Number(ofjectOf3.armor.stats.speed) + Number(ofjectOf3.armor.stats.intelligence) 
    if(ofjectOf3.fighter.element == ofjectOf3.weapon.element){
        total+=totalStatsOfArmor * 1.2
    }else{
        total+=totalStatsOfArmor
    }
    return total
}

const rng = {
    generateRandomFighterOrItem,
    generateWeaponAndArmor,
    generateAll,
    statsCalculator
}

export default rng