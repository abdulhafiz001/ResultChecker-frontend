import { Outlet, Link } from 'react-router-dom';
import { colors } from '../constants/colors';
import Footer from '../components/Footer';
import { useState } from 'react';

function GuestLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Header */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center justify-center">
                <Link to="/">
                  <img src="/termresult logo png.png" alt="TermResult Logo" className="h-40 w-auto mx-auto" />
                </Link>
              </div>
            </div>
            {/* Hamburger menu button for mobile */}
            <div className="sm:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded={menuOpen}
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
            {/* Nav links */}
            <div className="hidden sm:flex items-center space-x-6">
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/benefits"
                className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Benefits
              </Link>
              <Link
                to="/features"
                className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Features
              </Link>
              <Link
                to="/pricing"
                className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Pricing
              </Link>
              <Link
                to="/resources"
                className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Resources
              </Link>
              <Link
                to="/school/register"
                className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Register
              </Link>
              <Link
                to="/refer-earn"
                className="text-white px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: colors.primary }}
              >
                Refer & Earn
              </Link>
            </div>
          </div>
          {/* Mobile menu dropdown */}
          {menuOpen && (
            <div className="sm:hidden mt-2 flex flex-col items-center space-y-2 bg-white rounded shadow-lg py-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 w-full text-center"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/benefits"
                className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 w-full text-center"
                onClick={() => setMenuOpen(false)}
              >
                Benefits
              </Link>
              <Link
                to="/features"
                className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 w-full text-center"
                onClick={() => setMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/pricing"
                className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 w-full text-center"
                onClick={() => setMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/resources"
                className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 w-full text-center"
                onClick={() => setMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                to="/school/register"
                className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 w-full text-center"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
              <Link
                to="/refer-earn"
                className="text-white px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:opacity-90 w-full text-center"
                style={{ backgroundColor: colors.primary }}
                onClick={() => setMenuOpen(false)}
              >
                Refer & Earn
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <main>
      <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default GuestLayout;