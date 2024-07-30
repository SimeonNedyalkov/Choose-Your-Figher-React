import {createContext, useContext} from 'react'

const UserContext = createContext({
    userId:'',
    email:'',
    accessToken:'',
    isAuthenticated:false,
    changeAuthState: (changeAuthState = {}) => null,
    logout: () => null,
})

export function useAuthContext(){
    const data = useContext(UserContext)
    return data
}

export default UserContext