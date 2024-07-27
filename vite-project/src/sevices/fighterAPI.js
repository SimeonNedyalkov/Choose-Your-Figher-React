const BASE_URL = 'http://localhost:3030/data/fighters'
import requesterAPI from "./requester"

async function getAllFighters(){
    const data = await requesterAPI.get(BASE_URL)
    const res = await data.json()
    return res
}

async function getOneFighter(fighterId){
    const data = await requesterAPI.get(`${BASE_URL}/${fighterId}`)
    const res = await data.json()
    return res
}
async function createFighter(data) {
    const result =  await requesterAPI.post(`${BASE_URL}`,{...data})
    return result
}

const fighterData = {
    getAllFighters,
    getOneFighter,
    createFighter
}

export default fighterData