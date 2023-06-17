import {
    Navigate,
    Outlet,
  } from 'react-router-dom';
  
  const ProtectedRoute = ({ user, redirectPath = '/' } : any) => {
    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
  };

  export default ProtectedRoute;
  