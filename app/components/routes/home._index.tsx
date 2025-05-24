import { Link } from "react-router";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            Bienvenido a React Router v7
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Explora las diferentes secciones de nuestra aplicación usando la navegación file-based routing.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link
              to="/customers"
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">👥</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Customers</h3>
              <p className="text-gray-600">Gestiona la información de tus clientes</p>
            </Link>

            <Link
              to="/products"
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📦</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Products</h3>
              <p className="text-gray-600">Administra tu catálogo de productos</p>
            </Link>

            <Link
              to="/orders"
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Orders</h3>
              <p className="text-gray-600">Revisa y gestiona los pedidos</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}