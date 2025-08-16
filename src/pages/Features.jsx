import { Link } from "react-router-dom";
import { colors } from "../constants/colors";

const Features = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Powerful <span style={{ color: colors.primary }}>Features</span> for Modern Schools
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the comprehensive tools and capabilities that make TermResult the ultimate school management platform
              for Nigerian primary and secondary schools.
            </p>
          </div>
        </div>
      </div>

      {/* Teacher/Admin Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Teacher & Admin Dashboard
            </h2>
            <p className="text-xl text-gray-600">
              Powerful tools for educators and administrators to manage every aspect of school operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Dashboard Overview */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md text-white" style={{ backgroundColor: colors.primary }}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Comprehensive Dashboard</h3>
                  <p className="text-gray-600">Real-time overview of school performance, student statistics, and administrative insights.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md text-white" style={{ backgroundColor: colors.primaryDark }}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Student Management</h3>
                  <p className="text-gray-600">Add, edit, and manage student records with comprehensive profiles and academic history.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md text-white" style={{ backgroundColor: colors.primary }}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Class Management</h3>
                  <p className="text-gray-600">Create and organize classes, assign teachers, and manage subject allocations efficiently.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md text-white" style={{ backgroundColor: colors.primaryDark }}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Result Management</h3>
                  <p className="text-gray-600">Input and manage student scores, generate report cards, and track academic progress.</p>
                </div>
              </div>
            </div>

            {/* Dashboard Screenshot */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-4 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="/teachers /dashboard.png" 
                  alt="Teacher Dashboard" 
                  className="w-full h-auto rounded-lg border border-gray-200"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="/teachers /add student .png" 
                  alt="Add Student" 
                  className="w-32 h-auto rounded border border-gray-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Student Portal Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Student Portal Experience
            </h2>
            <p className="text-xl text-gray-600">
              Intuitive interface for students to access their academic information and track progress
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Student Screenshots */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-4 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="/student/dashboard.png" 
                  alt="Student Dashboard" 
                  className="w-full h-auto rounded-lg border border-gray-200"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="/student/profile.png" 
                  alt="Student Profile" 
                  className="w-32 h-auto rounded border border-gray-200"
                />
              </div>
            </div>

            {/* Student Features */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md text-white" style={{ backgroundColor: colors.primary }}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Personal Dashboard</h3>
                  <p className="text-gray-600">Clean, intuitive interface showing academic overview, recent results, and quick access to all features.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md text-white" style={{ backgroundColor: colors.primaryDark }}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Result Access</h3>
                  <p className="text-gray-600">Instant access to exam results, report cards, and academic performance tracking.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md text-white" style={{ backgroundColor: colors.primary }}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Subject Management</h3>
                  <p className="text-gray-600">View enrolled subjects, track progress, and access subject-specific resources and materials.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md text-white" style={{ backgroundColor: colors.primaryDark }}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Progress Tracking</h3>
                  <p className="text-gray-600">Visual progress indicators, performance analytics, and improvement suggestions for continuous learning.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Screenshots Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Platform Screenshots
            </h2>
            <p className="text-xl text-gray-600">
              See the platform in action with real screenshots from different modules
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Teacher Screenshots */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/teachers /login.png" 
                alt="Teacher Login" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Login</h3>
                <p className="text-gray-600">Professional login interface for teachers and administrators</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/teachers /add scores.png" 
                alt="Add Scores" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Score Management</h3>
                <p className="text-gray-600">Easy-to-use interface for inputting and managing student scores</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/teachers /student management.png" 
                alt="Student Management" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Student Management</h3>
                <p className="text-gray-600">Comprehensive tools for managing student records and information</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/teachers /add class.png" 
                alt="Add Class" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Class Management</h3>
                <p className="text-gray-600">Easy-to-use interface for creating and managing classes</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/teachers /settings.png" 
                alt="Settings" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">System Settings</h3>
                <p className="text-gray-600">Comprehensive configuration and customization options</p>
              </div>
            </div>

            {/* Student Screenshots */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/student/login.png" 
                alt="Student Login" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Student Portal</h3>
                <p className="text-gray-600">Clean and simple login for students to access their academic records</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/student/subjects.png" 
                alt="Subjects" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Subject Overview</h3>
                <p className="text-gray-600">Students can view all their enrolled subjects and track progress</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/student/result.png" 
                alt="Results" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Result Display</h3>
                <p className="text-gray-600">Clear presentation of academic results and performance metrics</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/student/progress.png" 
                alt="Progress Tracking" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Progress Tracking</h3>
                <p className="text-gray-600">Visual progress indicators and performance analytics</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/student/profile.png" 
                alt="Student Profile" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Student Profile</h3>
                <p className="text-gray-600">Comprehensive student information and academic history</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Experience These Features?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of schools already transforming their operations with TermResult
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/school/register"
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: colors.primary }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Register Your School
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
