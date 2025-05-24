import type React from "react";
import { useAuth } from "app/hooks/useAuth";
import { Layout } from "~/root";

export const HomePage: React.FC = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome {user?.name}
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                You are signed in.
              </p>
              <div className="mt-4 p-4 bg-blue-50 rounded-md">
                <h3 className="text-sm font-medium text-blue-800">
                  User information
                </h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p><strong>Name:</strong> {user?.name}</p>
                  <p><strong>Email:</strong> {user?.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}