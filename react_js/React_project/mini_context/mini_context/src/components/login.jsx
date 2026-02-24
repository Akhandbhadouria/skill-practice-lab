import React, { useState, useContext } from "react"; // for fetching the value form userContext file  we use useContext provider by react
import user_detail_Context from "../context/userContext";
function Login() {
    const[username, setName] = useState("");
    const[password, setPassword] = useState("");

    const {setData}=useContext(user_detail_Context);//Used to access the global context method setData (provided by User_provider).

 



    const handle_click = (e) => {
        e.preventDefault();
       setData({username,password})
    };
    return (
        <div>
            <h2>LOGIN</h2>
            <input type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setName(e.target.value)}
            />
            <input type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handle_click}>submit</button>
        </div>
    )
}
export default Login