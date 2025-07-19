import { useState } from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../../constants/colors';

const SuperAdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // TODO: Implement actual authentication
      console.log('Super admin login attempt:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to super admin dashboard
      alert('Login successful! Redirecting to super admin dashboard...');
      // window.location.href = '/super-admin/dashboard';
      
    } catch (error) {
      setErrors({ general: 'Invalid email or password' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-start mb-2">
          <Link to="/" className="inline-flex items-center text-blue-400 hover:underline text-sm font-medium">
            <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
        <Link to="/" className="flex justify-center">
          <img src="/termresult logo png.png" alt="TermResult Logo" className="h-40 w-auto mx-auto -mb-6" />
        </Link>
        <h2 className="text-center text-3xl font-extrabold text-white -mt-4">
          Super Administrator
        </h2>
        <p className="mt-2 text-center text-sm text-gray-300">
          Platform management and oversight
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white/10 backdrop-blur-md py-8 px-4 shadow-2xl sm:rounded-lg sm:px-10 border border-white/20">
          {errors.general && (
            <div className="mb-4 bg-red-500/20 border border-red-400/50 text-red-200 px-4 py-3 rounded-md">
              {errors.general}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                Administrator Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm bg-white/10 text-white border-white/30 ${
                    errors.email 
                      ? 'focus:ring-red-500 focus:border-red-500' 
                      : 'focus:ring-purple-500 focus:border-purple-500'
                  }`}
                  placeholder="admin@edumanage.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-300">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm bg-white/10 text-white border-white/30 ${
                    errors.password 
                      ? 'focus:ring-red-500 focus:border-red-500' 
                      : 'focus:ring-purple-500 focus:border-purple-500'
                  }`}
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-300">{errors.password}</p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded border-white/30 bg-white/10 focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-200">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to="/super-admin/forgot-password"
                  className="font-medium text-purple-300 hover:text-purple-200 transition-colors duration-200"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
                  isLoading 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:opacity-90'
                } transition-all duration-200 bg-gradient-to-r from-purple-600 to-violet-600`}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-purple-300 group-hover:text-purple-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-2a1 1 0 11-2 0 1 1 0 012 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {isLoading ? 'Authenticating...' : 'Access Control Panel'}
              </button>
            </div>
          </form>

          <div className="mt-6 border-t border-white/20 pt-6">
            <div className="text-center">
              <p className="text-sm text-gray-300 mb-2">Other portals:</p>
              <div className="flex justify-center space-x-4">
                <Link
                  to="/school/login"
                  className="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-200"
                >
                  School Login
                </Link>
                <span className="text-gray-500">|</span>
                <Link
                  to="/student/login"
                  className="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-200"
                >
                  Student Portal
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400">
              🔒 Secure administrative access only
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminLogin;
