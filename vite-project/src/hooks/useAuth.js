import { useContext, useEffect, useState } from "react"
import userAPI from "../sevices/usersAPI"
import UserContext from "../contexts/UserContext"

export function useLogin(){
    const {changeAuthState} = useContext(UserContext)
    async function loginHandler(email,password){
        const {password:_ , ...result} = await userAPI.login(email,password)
        changeAuthState(result)
        return result
    }
    return loginHandler
}
export function useRegister(){
    const {changeAuthState} = useContext(UserContext)
    async function registerHandler(email,username,password){
        const {password:_ , ...result} = await userAPI.register(email,username,password)
        changeAuthState(result)
        return result
    }
    return registerHandler
}

export function useLogout(){
    const {sessionLogout} = useContext(UserContext)

    async function logoutHandler(){
        await userAPI.logout()
        sessionLogout()
    }
    return logoutHandler
}

export function useGetUserInfo(){
    const [username, setUsername] = useState('');
    const [userId,setUserId] =useState('')
    useEffect(() => {
        async function fetchUserInfo() {
            try {
                const { username,_id } = await userAPI.getUserInfo();
                setUserId(_id)
                setUsername(username);
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        }

        fetchUserInfo();
    }, []);
    return [username,setUsername,userId,setUserId]
}