
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
}

// This is a simplified PrivateRoute component that doesn't use Clerk
// It now assumes the user is always authenticated
const PrivateRoute = ({ children }: PrivateRouteProps) => {
  // For demonstration purposes, this component now just renders the children
  // In a real application, you would implement your own authentication logic here
  return <>{children}</>;
};

export default PrivateRoute;
