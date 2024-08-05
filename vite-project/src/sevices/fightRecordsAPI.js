import requesterAPI from "./requester"

const BASE_URL = 'http://localhost:3030/data/fightRecords'

async function createFightRecord(winnerId,loserId){
    const response = await requesterAPI.post(`${BASE_URL}`,{winnerId,loserId})
    return response
}
async function getAllWinsAndLosses(fighterId){
    const params = new URLSearchParams({
        where: `fighterId="${fighterId}"`,
        load: `author=_ownerId:_id`
    })
    const response = await requesterAPI.get(`${BASE_URL}?${params.toString()}`)
    return response
}

const fightRecordsAPI = {
    createFightRecord,
    getAllWinsAndLosses
}

export default fightRecordsAPI