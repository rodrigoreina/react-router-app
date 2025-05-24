import type React from "react";
import { Navigate } from "react-router";
import { LoginForm } from "app/components/auth/LoginForm";
import { LoadingSpinner } from "app/components/common/LoadingSpinner";
import { useAuth } from "app/hooks/useAuth";
import { ROUTES } from "app/utils/constants";

export const LoginPage: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (user) {
    return <Navigate to={ROUTES.HOME} replace />
  }

  return <LoginForm />
}