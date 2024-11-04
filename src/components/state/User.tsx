import {useState} from 'react'
type AuthUser={
    name:string
    email:string
}
export const User =()=>
{
    const[user,setUser]=useState<AuthUser>({} as AuthUser)
    const handleLogin=()=>{
        setUser({
            name:'Anna',
            email:'Anna123',
        })
    }
    //const handleLogout =()=>{}
   // setUser(null)
   //<button onClick={handleLogout}>Logout</button>
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
           
            <div>User name is {user.name}</div>
            <div>User email is{user.email}</div>
        </div>
    )
}