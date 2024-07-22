
const BASE_URL = 'http://localhost:3030/data/weapons'

async function getAllWeapons(){
    const data = await fetch(BASE_URL)
    const res = await data.json()
    return res
}

async function getOneWeapon(weaponId){
    const data = await fetch(`${BASE_URL}/${weaponId}`)
    const res = await data.json()
    return res
}

const weaponData = {
    getAllWeapons,
    getOneWeapon,
}

export default weaponData