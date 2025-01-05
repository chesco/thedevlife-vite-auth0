/* eslint-disable react/prop-types */
// ProtectedRoute.js
import { useAuth0 } from '@auth0/auth0-react';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (!isAuthenticated) {
    loginWithRedirect();
    return null;
  }

  return children;
};

export default ProtectedRoute;