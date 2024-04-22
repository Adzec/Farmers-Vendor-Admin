import React from 'react';
import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

interface PrivateRouteProps {
    children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const user = localStorage.getItem('farmers-vendor-admin-token');
    // console.log(user);
    return user ? <>{children}</> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
