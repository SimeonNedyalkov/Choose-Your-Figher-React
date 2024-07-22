import useFetch from "../hooks/useFetch";

const FIGHTERS_BASE_URL = 'http://localhost:3030/data/fighters'
const WEAPONS_BASE_URL = 'http://localhost:3030/data/weapons'
const ARMORS_BASE_URL = 'http://localhost:3030/data/armors'

async function getFighters(){
    const fighters = useFetch(FIGHTERS_BASE_URL,[])
    return fighters
}
async function getWeapons(){
    return useFetch(WEAPONS_BASE_URL,[])
}
async function getArmors(){
    return useFetch(ARMORS_BASE_URL,[])
}

const data = {
    getFighters,
    getWeapons,
    getArmors
}

export default data