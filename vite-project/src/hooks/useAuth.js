import { useContext } from "react"
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

