import requesterAPI from "./requester"

const BASE_URL = 'http://localhost:3030/users'

async function login(email,password){
    const authData = await requesterAPI.post(`${BASE_URL}/login`,{email,password})
    return authData
}
async function register(email,password){
    const authData = await requesterAPI.post(`${BASE_URL}/register`,{email,password})
    return authData
}

const userAPI = {
    login,
    register
}

export default userAPI