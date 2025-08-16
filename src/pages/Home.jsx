
import { Link } from "react-router-dom";
import { colors } from "../constants/colors";

const Home = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

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
                  The complete school management platform for Nigerian Primary & secondary schools.
                  Manage students, teachers, classes, and results all in one secure platform.
                  Students can access their results from anywhere, anytime.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/school/register"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white hover:opacity-90 transition-all duration-200"
                      style={{ backgroundColor: colors.primary }}
                    >
                      School Registration
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img src="/young-person-taking-notes-textbook-paper-with-pen-looking-modern-laptop-woman-writing-information-notebook-files-doing-remote-work-adult-working-from-home-business.jpg" alt="Teacher using computer" className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" />
        </div>
      </div>

      {/* YouTube Video Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See TermResult in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our comprehensive demo video to understand how TermResult transforms school management
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-96 md:h-[500px]"
                  src="https://www.youtube.com/embed/1XMOFv18KqM?si=0csbma5DZnYS_vdN"
                  title="TermResult Platform Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Can't watch the video? Check out our <Link to="/features" className="text-blue-600 hover:text-blue-800 font-medium">Features page</Link> for detailed screenshots and information.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>HD Quality • 5+ minutes</span>
              </div>
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
              Join other schools already using TermResult Today
            </span>
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row lg:mt-0 lg:mt-0 lg:flex-shrink-0">
            <div className="rounded-md shadow">
              <Link
                to="/school/register"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200"
              >
                School Registration
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer removed - TermResult Official Page */}
    </div>
  );
};

export default Home;
