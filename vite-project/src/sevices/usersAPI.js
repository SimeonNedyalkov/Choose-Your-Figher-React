import requesterAPI from "./requester"

const BASE_URL = 'http://localhost:3030/users'

async function login(email,password){
    const authData = await requesterAPI.post(`${BASE_URL}/login`,{email,password})
    return authData
}
async function register(email,username,password){
    const authData = await requesterAPI.post(`${BASE_URL}/register`,{email,username,password})
    return authData
}
async function getUserInfo(){
    const authData = await requesterAPI.get(`${BASE_URL}/me`)
    return authData
}

const userAPI = {
    login,
    register,
    getUserInfo
}

export default userAPI