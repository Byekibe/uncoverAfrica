import React from "react";
import { Navigate } from "react-router-dom";
import { getFromLocalStorage } from './local-storage';
import 'react-toastify/dist/ReactToastify.css';

const ProtectedRoute = ({children}) => {

    const user = getFromLocalStorage("user");
    return user?.token ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
