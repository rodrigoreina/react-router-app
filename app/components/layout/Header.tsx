import type React from "react";
import { useAuth } from "app/hooks/useAuth";

export const Header: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = (): void => {
    logout();
  };

  if (!user) {
    return null;
  }

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">
              My React App
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-700">
              Hello, <span className="font-medium">{user.name}</span>
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}