export function getAccessToken(){
    const authJSON = localStorage.getItem('user')
    if(!authJSON){
        return ''
    }
    const authData = JSON.parse(authJSON)
    return authData?.accessToken
}