import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    console.log("askdhfaksjdddddddddd")
    const {token} = useSelector((state) => state.auth);
    console.log("Token is", token);

    if(token !== null)
        return children
    else
    
        return <Navigate to="/login" />

}

export default PrivateRoute
