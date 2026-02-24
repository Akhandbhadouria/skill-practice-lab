import React from 'react'
import { useSelector} from 'react-redux'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Protected({children,authentication=true}) {
    const navigate=useNavigate();
    const[loader,setloader]=useState();
    const authStatus=useSelector(state=>state.auth.login)

    useEffect(()=>{
         if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setloader(false)
    },[navigate,authStatus,authentication])
 return loader?<h1>Loading....</h1>: <>{children}</>
}



//Typical Usage Example
// Only authenticated users can see the Dashboard.
// Unauthenticated users are redirected to /login.
 