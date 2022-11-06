import React, {useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {AuthContext} from '../AuthProvider/AuthProvider'

const PrivateRoute = ({children}) => {

    const {user,isLoading} = useContext(AuthContext)
    let location = useLocation();

    if(isLoading){
        return <div className='min-h-[70h] flex justify-center items-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange"></div>
        </div>
    }

    if(user){
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoute;