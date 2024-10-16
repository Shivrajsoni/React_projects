// import React from 'react'

import { useDispatch } from "react-redux"
import authService from '../../appwrite/config'
import { logout} from '../../store/authSlice'


function LogoutBttn() {

    const dispatch = useDispatch()
    // function for handling logout logic
    const logoutHandler = () =>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button
    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
    // adding function doing  conditional rendering
    onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBttn
