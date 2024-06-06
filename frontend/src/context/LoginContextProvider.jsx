import React, { useEffect, useState } from 'react'
import LoginContext from './loginContext'

function LoginContextProvider({children}) {

    const [loginStatus, setLoginStatus] = useState()

    return (
        <LoginContext.Provider value={{loginStatus, setLoginStatus}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider
