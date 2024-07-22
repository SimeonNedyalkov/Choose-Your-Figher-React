const BASE_URL = 'http://localhost:3030/data/armors'

async function getAllArmors(){
    const data = await fetch(BASE_URL)
    const res = await data.json()
    return res
}

async function getOneArmor(armorId){
    const data = await fetch(`${BASE_URL}/${armorId}`)
    const res = await data.json()
    return res
}

const armorData = {
    getAllArmors,
    getOneArmor,
}

export default armorData