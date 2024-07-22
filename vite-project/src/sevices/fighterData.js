
const BASE_URL = 'http://localhost:3030/data/fighters'

async function getAllFighters(){
    const data = await fetch(BASE_URL)
    return data
}

async function getOneFighter(fighterId){
    const data = await fetch(`${BASE_URL}/${fighterId}`)
    return data
}

const fighterData = {
    getAllFighters,
    getOneFighter
}

export default fighterData