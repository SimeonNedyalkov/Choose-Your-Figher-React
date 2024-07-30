import { getAccessToken } from "../utils/authUtil";

async function requester(method,url,data){
    const options = {}
    const accessToken = getAccessToken()

    if(accessToken){
        options.headers = {
            ...options.headers,
            "X-Authorization":accessToken
        }   
    }

    if(data){
        options.headers = {
            ...options.headers,
            'Content-type' : 'aplication/json'
        };
        options.body = JSON.stringify(data)
    }

    if(method !== 'GET'){
        options.method = method
    }

    const response = await fetch(url,options)
    const result = await response.json()
    
    if(!response.ok){
        throw response
    }
    return result
}
export const get = requester.bind(null,'GET')
export const post = requester.bind(null,'POST')
export const put = requester.bind(null,'PUT')
export const del = requester.bind(null,'DELETE')

const requesterAPI = {
    get,
    post,
    put,
    del
}
export default requesterAPI