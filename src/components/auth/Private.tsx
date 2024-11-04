
import React from "react";
import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProp={
    isLogedIn:boolean
    component:React.ComponentType<ProfileProps>
}
export const Private =({isLogedIn,component:Component}:PrivateProp)=>{
   if (isLogedIn) {
    return <Component  name='Anna'/>
   } else {
    return <Login />
   }
}
