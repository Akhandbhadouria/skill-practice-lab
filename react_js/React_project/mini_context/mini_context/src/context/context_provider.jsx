import React, { children }  from "react"
import {useState}  from "react";
import user_detail_Context from "./userContext";

const User_provider=({children})=>{
    const [data,setData]=useState(null);
    return(
        <user_detail_Context.Provider value={{data,setData}}>{/*This makes data and setData accessible in any child component that calls useContext(user_detail_Context).*/}
            {children}   
        </user_detail_Context.Provider>
        
    )
}
export default User_provider;

// The <Login /> and <Profile /> components are automatically passed to User_provider as a special prop named children.
//{children} simply renders whatever was placed inside the provider component.