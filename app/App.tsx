import React, { Suspense } from 'react';
import { LoadingSpinner } from './components/common/LoadingSpinner';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ROUTES } from './utils/constants';
import { ProtectedRoute } from './components/common/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';

const HomePage = React.lazy(() =>
  import('./pages/HomePage').then(module => ({ default: module.HomePage }))
);
const LoginPage = React.lazy(() =>
  import('./pages/LoginPage').then(module => ({ default: module.LoginPage }))
);

const AppContent: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
      }
    >
      <Routes>
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route
          path={ROUTES.HOME}
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        {/* Ruta por defecto redirige al home */}
        <Route path="*" element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } />
      </Routes>
    </Suspense>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;