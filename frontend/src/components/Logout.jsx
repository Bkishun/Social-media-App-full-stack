import React, { useContext } from 'react'
import LoginContext from '../context/loginContext'
import { useNavigate } from 'react-router-dom';

function Logout() {
  const {loginStatus, setLoginStatus}  = useContext(LoginContext)
  const navigate = useNavigate();
  const handleLogout = async() => {
    try {
        const response = await fetch('/api/v1/users/logout', {
            method: "POST",
            credentials: "include"
        })
    
        if(response.ok){
            setLoginStatus(false)
            if(loginStatus){
                console.log("logout ho gya")
                navigate("/login")
            }
            console.log("user is logged out")
        } else{
            console.log("user not logged out")
        }
    } catch (error) {
        console.log("something went wrong")
    }
  }
  return (
    <div className='bg-orange-700 rounded-md p-2 text-white font-medium hover:bg-orange-600'>
        <button onClick={handleLogout} >Logout</button>
    </div>
  )
}

export default Logout
