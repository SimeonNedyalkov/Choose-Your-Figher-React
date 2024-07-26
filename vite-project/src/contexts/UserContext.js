import {createContext} from 'react'

const UserContext = createContext({
    email:'',
    accessToken:'',
    isAuthenticated:false,
    changeAuthState:()=>null
})

export default UserContext