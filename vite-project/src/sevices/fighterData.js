const BASE_URL = 'http://localhost:3030/data/fighters'

async function getAllFighters(){
    const data = await fetch(BASE_URL)
    const res = await data.json()
    return res
}

async function getOneFighter(fighterId){
    const data = await fetch(`${BASE_URL}/${fighterId}`)
    const res = await data.json()
    return res
}

const fighterData = {
    getAllFighters,
    getOneFighter
}

export default fighterData