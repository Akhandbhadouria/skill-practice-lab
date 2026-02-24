import React from 'react'
import auth_service from "../../appwrite/auth"
import { logout } from "../../store/authSlice"
import { useDispatch } from 'react-redux'//useDispatch: React hook to dispatch Redux actions.

function Logoutbtn() {
    const dispatch = useDispatch()
    const logout_handeler = () => {
        auth_service.logout().then(() => {
            dispatch(logout()) // calls the logout reducer and update the state .
        })
    }
    return (
        <button 
        onClick={logout_handeler}
        className="btn bg-red-600 hover:bg-red-700 text-white">
            Logout
        </button>
        )
}

export default Logoutbtn