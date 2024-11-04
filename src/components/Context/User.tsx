import { useContext } from 'react'
import { UserContext } from './UserContext'

export const User =()=>{
    const userContext =useContext(UserContext)
    const hendleLogin=()=>{
        userContext.setUser({
            name:'Anna',
            email:'anna@get.com',
        })
    }
    const hendleLogout=()=>{
        userContext.setUser(null)
    }
    return(
        <div>
        <button onClick={hendleLogin}>Login</button>
        <button onClick={hendleLogout}>Logout</button>
        <div>User name is {userContext.user?.name}</div>
        <div>User email is {userContext.user?.email}</div>
    </div>
)
    
}