import requesterAPI from "./requester"

const BASE_URL = 'http://localhost:3030/data/fightRecords'

async function createFightRecord(winnerId,loserId){
    const response = await requesterAPI.post(`${BASE_URL}`,{winnerId,loserId})
    return response
}
async function getAllWins(fighterId){
    const params = new URLSearchParams({
        where: `winnerId="${fighterId}"`,
    })
    const response = await requesterAPI.get(`${BASE_URL}?${params.toString()}`)
    return response
}
async function getAllLosses(fighterId){
    const params = new URLSearchParams({
        where: `loserId="${fighterId}"`,
    })
    const response = await requesterAPI.get(`${BASE_URL}?${params.toString()}`)
    return response
}

const fightRecordsAPI = {
    createFightRecord,
    getAllWins,
    getAllLosses
}

export default fightRecordsAPI