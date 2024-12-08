import { Navigate, RouteProps } from 'react-router-dom';

// ProtectedRoute component to prevent unauthenticated users from accessing certain pages
const ProtectedRoute: React.FC<RouteProps> = ({ children }) => {
  const isAuthenticated = Boolean(localStorage.getItem('authToken')); // Check if token exists in localStorage

  if (!isAuthenticated) {
    return <Navigate to="/auth/signin" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
