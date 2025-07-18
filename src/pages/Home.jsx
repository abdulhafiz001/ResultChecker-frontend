
import { Link } from "react-router-dom";
import { colors } from "../constants/colors";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Header */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-3xl font-bold text-gray-900">
                  <span style={{ color: colors.primary }}>EduManage</span>
                  <span className="text-gray-600 text-lg ml-2">Pro</span>
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                to="/school/login"
                className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                School Login
              </Link>
              <Link
                to="/student/login"
                className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Student Login
              </Link>
              <Link
                to="/super-admin/login"
                className="text-white px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: colors.primary }}
              >
                Super Admin
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Transform Your School's</span>{' '}
                  <span className="block xl:inline" style={{ color: colors.primary }}>
                    Result Management
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  The complete school management platform for Nigerian secondary schools.
                  Manage students, teachers, classes, and results all in one secure platform.
                  Students can access their results from anywhere, anytime.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow-lg">
                    <Link
                      to="/school/register"
                      className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-12 transition-all duration-200 hover:opacity-90 hover:shadow-xl"
                      style={{ backgroundColor: colors.primary }}
                    >
                      🏫 Register Your School
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/student/login"
                      className="w-full flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-12 transition-all duration-200 hover:border-gray-400"
                    >
                      🎓 Student Portal
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full bg-gradient-to-r from-indigo-500 to-purple-600 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🏫</div>
              <h3 className="text-2xl font-bold mb-2">School Management</h3>
              <p className="text-lg opacity-90">Made Simple & Secure</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase" style={{ color: colors.primary }}>
              Platform Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Complete School Management Solution
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Everything your school needs to manage students, teachers, classes, and results efficiently
            </p>
          </div>

          <div className="mt-12">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white" style={{ backgroundColor: colors.primary }}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">School Registration</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Easy multi-step registration process for schools to join the platform and start managing their academic records.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white" style={{ backgroundColor: colors.primaryDark }}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Teacher Management</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Add teachers, assign classes and subjects, manage roles and permissions for comprehensive staff management.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white" style={{ backgroundColor: colors.primary }}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Student Records</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Complete student management with class assignments, subject selection, and comprehensive academic tracking.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white" style={{ backgroundColor: colors.primaryDark }}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Result Management</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Teachers can input results, generate report cards, and students can access their results instantly online.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white" style={{ backgroundColor: colors.primary }}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Analytics & Reports</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Comprehensive analytics, progress tracking, and detailed reports for informed decision making.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white" style={{ backgroundColor: colors.primaryDark }}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Secure & Reliable</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Bank-level security with role-based access control, data encryption, and reliable cloud infrastructure.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase" style={{ color: colors.primary }}>
              How It Works
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Get Started in 3 Simple Steps
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-4 text-white text-2xl font-bold" style={{ backgroundColor: colors.primary }}>
                  1
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Register Your School</h3>
                <p className="text-base text-gray-500">
                  Complete our simple registration process with your school details, contact information, and credentials.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-4 text-white text-2xl font-bold" style={{ backgroundColor: colors.primary }}>
                  2
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Setup Your School</h3>
                <p className="text-base text-gray-500">
                  Add classes, subjects, teachers, and students. Configure your school structure and assign roles.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-4 text-white text-2xl font-bold" style={{ backgroundColor: colors.primary }}>
                  3
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Start Managing Results</h3>
                <p className="text-base text-gray-500">
                  Teachers input results, students access them instantly, and administrators generate comprehensive reports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to transform your school?</span>
            <span className="block text-indigo-200">
              Join hundreds of schools already using EduManage Pro.
            </span>
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow-lg">
              <Link
                to="/school/register"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 transition-all duration-200"
              >
                🏫 Register Your School
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3 inline-flex rounded-md shadow-lg">
              <Link
                to="/student/login"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-indigo-600 transition-all duration-200"
              >
                🎓 Student Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <p className="text-gray-400 text-sm">
              © 2024 EduManage Pro. All rights reserved.
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              Empowering Nigerian education through innovative technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
