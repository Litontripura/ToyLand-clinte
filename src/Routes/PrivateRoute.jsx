import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import ClipLoader from "react-spinners/ClipLoader";

const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <ClipLoader></ClipLoader>
    }
    if(user){
        return children
    }
    return <Navigate state={{from: location}} to='/login'></Navigate>
};

export default PrivateRoute;