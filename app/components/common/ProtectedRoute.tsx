import type React from "react";
import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "app/hooks/useAuth";
import { LoadingSpinner } from "./LoadingSpinner";
import { ROUTES } from "app/utils/constants";

interface ProtectedRouteProps {
  children: ReactNode
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  return <>{children}</>;
}