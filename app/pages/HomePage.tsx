import type React from "react";
import { useAuth } from "app/hooks/useAuth";
import { Layout } from "~/root";

export const HomePage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Bienvenido {user?.name}
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Has iniciado sesión exitosamente en la aplicación
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Información del Usuario
            </h2>

            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-500 w-20">Nombre:</span>
                <span className="text-sm text-gray-900">{user?.name}</span>
              </div>

              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-500 w-20">Email:</span>
                <span className="text-sm text-gray-900">{user?.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content Sections */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature Card 1 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary-100 rounded-md flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Autenticación Segura</h3>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  Tu sesión está protegida con cookies HttpOnly para máxima seguridad.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Aplicación Rápida</h3>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  Construida con React 19, Vite y las mejores prácticas modernas.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-100 rounded-md flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Escalable</h3>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  Arquitectura preparada para crecer con nuevas funcionalidades.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-primary-50 rounded-lg p-8 text-center">
          <h3 className="text-lg font-medium text-primary-900 mb-2">
            ¡Todo está listo!
          </h3>
          <p className="text-primary-700 mb-4">
            Tu aplicación está configurada y funcionando correctamente.
            Puedes comenzar a agregar nuevas funcionalidades.
          </p>
          <div className="text-sm text-primary-600">
            <p>💡 Sugerencias para próximos pasos:</p>
            <ul className="mt-2 space-y-1 text-left max-w-md mx-auto">
              <li>• Agregar más endpoints a la API</li>
              <li>• Implementar manejo de roles y permisos</li>
              <li>• Añadir más páginas y funcionalidades</li>
              <li>• Configurar tests unitarios</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};