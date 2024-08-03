function generateRandomFighterOrItem(arrayWithFightersOrItems){
    const randomNumber = Math.floor(Math.random() * arrayWithFightersOrItems?.length);
    return arrayWithFightersOrItems[randomNumber]
}
function generateAll(arrayWithFighters,arrayWithWeapons,arrayWithArmors){
    const randomFighter = Math.floor(Math.random() * arrayWithFighters?.length);
    const randomWeapon = Math.floor(Math.random() * arrayWithWeapons?.length);
    const randomArmor = Math.floor(Math.random() * arrayWithArmors?.length);
    const objectOf3 = {fighter:arrayWithFighters[randomFighter],weapon:arrayWithWeapons[randomWeapon],armor:arrayWithArmors[randomArmor]}
    return objectOf3
}
function generateWeaponAndArmor(fighter,arrayWithWeapons,arrayWithArmors){
    const randomWeapon = Math.floor(Math.random() * arrayWithWeapons?.length);
    const randomArmor = Math.floor(Math.random() * arrayWithArmors?.length);
    const objectOf3 = {fighter,weapon:arrayWithWeapons[randomWeapon],armor:arrayWithArmors[randomArmor]}
    return objectOf3
}
function statsCalculator(ofjectOf3){
    let total = 0
    const totalStatsOfFighter = Number(ofjectOf3.fighter.stats?.attack) + Number(ofjectOf3.fighter.stats?.defense) + Number(ofjectOf3.fighter.stats?.speed) + Number(ofjectOf3.fighter.stats?.intelligence) + Number(ofjectOf3.fighter.stats?.health) 
    total+=totalStatsOfFighter

    const totalStatsOfWeapon = Number(ofjectOf3.weapon.stats?.attack) + Number(ofjectOf3.weapon.stats?.defense) + Number(ofjectOf3.weapon.stats?.speed) + Number(ofjectOf3.weapon.stats?.intelligence) 
    if(ofjectOf3.fighter?.element == ofjectOf3.weapon?.element && ofjectOf3.fighter?.element == ofjectOf3.armor?.element){
        total+=Math.round(totalStatsOfWeapon * 1.4)
    }else if(ofjectOf3.fighter?.element == ofjectOf3.weapon?.element){
        total+=Math.round(totalStatsOfWeapon * 1.2)
    }else{
        total+=totalStatsOfWeapon
    }
    
    const totalStatsOfArmor = Number(ofjectOf3.armor.stats?.health) + Number(ofjectOf3.armor.stats?.defense) + Number(ofjectOf3.armor.stats?.speed) + Number(ofjectOf3.armor.stats?.intelligence) 
    if(ofjectOf3.fighter?.element == ofjectOf3.weapon?.element && ofjectOf3.fighter?.element == ofjectOf3.armor?.element){
        total+=Math.round(totalStatsOfArmor * 1.4)
    }else if(ofjectOf3.fighter?.element == ofjectOf3.armor?.element){
        total+=Math.round(totalStatsOfArmor * 1.2)
    }else{
        total+=totalStatsOfArmor
    }
    return total
}

function calculateFighterWithCombinedStats(fighter,weapon,armor){
    const combinedStats = {
        "attack": fighter.stats?.attack,
        "defense": fighter.stats?.defense,
        "speed": fighter.stats?.speed,
        "intelligence": fighter.stats?.intelligence,
        "health": fighter.stats?.health
    }
    if (fighter.stats && weapon.stats && armor.stats) {
        Object.entries(weapon?.stats).forEach(([stat,value])=>{
            console.log(`Stat:${stat} with Value:${value}`)
            if(fighter.element == weapon.element && fighter.element == armor.element){
                combinedStats[stat] += Math.round(value * 1.4)
            }else if (fighter.element == weapon.element){
                combinedStats[stat] += Math.round(value * 1.2)
            }else{
                combinedStats[stat] += value
            }
            
        })
        Object.entries(armor?.stats).forEach(([stat,value])=>{
            console.log(`Stat:${stat} with Value:${value}`)
            if(fighter.element == weapon.element && fighter.element == armor.element){
                combinedStats[stat] += Math.round(value * 1.4)
            }else if (fighter.element == armor.element){
                combinedStats[stat] += Math.round(value * 1.2)
            }else{
                combinedStats[stat] += value
            }
            
        })
    }

    return combinedStats
}

const rng = {
    generateRandomFighterOrItem,
    generateWeaponAndArmor,
    generateAll,
    statsCalculator,
    calculateFighterWithCombinedStats
}

export default rng