import { createContext, useContext } from 'react'
import usePersistedState from '../hooks/usePersistedState'

export const UserContext = createContext({
    userId:'',
    email:'',
    accessToken:'',
    isAuthenticated:false,
    changeAuthState: (changeAuthState = {}) => null,
    logout: () => null,
})

export default function AuthContextProvider(props){
    const [authState,setAuthstate] = usePersistedState('user',{})
    
    const changeAuthState = (state) =>{
        setAuthstate(state)
      }

      const logout = () =>{
        setAuthstate(null)
      }

      const contextData = {
        email:authState?.email,
        userId:authState?._id,
        accessToken:authState?.accessToken,
        isAuthenticated:!!authState?.email,
        changeAuthState,
        logout
      }

    return(
        <UserContext.Provider value={contextData}>
            {props.children}
        </UserContext.Provider>
    )
}
export function useAuthContext(){
    const data = useContext(UserContext)
    return data
}