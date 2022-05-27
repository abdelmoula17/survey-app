import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./useAuth";

const RequiredAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useAuth();
    const location = useLocation();
    if (!auth.user) {
        return <Navigate to="/Login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequiredAuth;
