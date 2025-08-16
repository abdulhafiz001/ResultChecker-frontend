import { Link } from "react-router-dom";
import { colors } from "../constants/colors";

const Benefits = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Why Choose <span style={{ color: colors.primary }}>TermResult</span>?
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our comprehensive school management platform transforms your educational institution
              with powerful tools, seamless workflows, and measurable results.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Efficiency Benefits */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-6 text-white" style={{ backgroundColor: colors.primary }}>
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Increased Efficiency</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Automated result processing saves 80% of time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Instant access to student records</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Streamlined administrative workflows</span>
                </li>
              </ul>
            </div>

            {/* Cost Benefits */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-6 text-white" style={{ backgroundColor: colors.primaryDark }}>
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Cost Savings</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Reduce paper and printing costs by 90%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Eliminate manual data entry errors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Lower administrative overhead</span>
                </li>
              </ul>
            </div>

            {/* Quality Benefits */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-6 text-white" style={{ backgroundColor: colors.primary }}>
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Improved Quality</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Accurate and consistent result reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Real-time progress monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Data-driven decision making</span>
                </li>
              </ul>
            </div>

            {/* Security Benefits */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-6 text-white" style={{ backgroundColor: colors.primaryDark }}>
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Enhanced Security</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Bank-level data encryption</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Role-based access control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Regular security audits</span>
                </li>
              </ul>
            </div>

            {/* Accessibility Benefits */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-6 text-white" style={{ backgroundColor: colors.primary }}>
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">24/7 Access</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Access from anywhere, anytime</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Mobile-responsive design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Cloud-based reliability</span>
                </li>
              </ul>
            </div>

            {/* Support Benefits */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-6 text-white" style={{ backgroundColor: colors.primaryDark }}>
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Expert Support</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Dedicated customer success team</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Comprehensive training resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>24/7 technical support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshot Showcase */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">See TermResult in Action</h2>
            <p className="text-xl text-gray-600">Explore our intuitive interface and powerful features</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Teacher Dashboard</h3>
              <p className="text-gray-600 mb-6">
                Our comprehensive dashboard provides teachers and administrators with real-time insights into school performance,
                student progress, and key metrics at a glance.
              </p>
              <div className="bg-white rounded-lg shadow-xl p-4 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/teachers /dashboard.png" 
                  alt="Teacher Dashboard" 
                  className="w-full h-auto rounded-lg border border-gray-200"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Result Management</h3>
              <p className="text-gray-600 mb-6">
                Teachers can easily input and manage student results with our intuitive interface,
                while students access their performance data instantly.
              </p>
              <div className="bg-white rounded-lg shadow-xl p-4 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/teachers /add scores.png" 
                  alt="Result Management" 
                  className="w-full h-auto rounded-lg border border-gray-200"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Student Portal</h3>
              <p className="text-gray-600 mb-6">
                Students get instant access to their academic records, results, and progress reports
                through our clean and intuitive student portal interface.
              </p>
              <div className="bg-white rounded-lg shadow-xl p-4 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/student/dashboard.png" 
                  alt="Student Dashboard" 
                  className="w-full h-auto rounded-lg border border-gray-200"
                />
              </div>
            </div>
            
            <div className="lg:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Student Results</h3>
              <p className="text-gray-600 mb-6">
                Clear and comprehensive result display allows students to track their academic performance
                and identify areas for improvement.
              </p>
              <div className="bg-white rounded-lg shadow-xl p-4 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/student/result.png" 
                  alt="Student Results" 
                  className="w-full h-auto rounded-lg border border-gray-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Built with Modern Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">Cloud</div>
              <div className="text-blue-200">Secure Cloud Infrastructure</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">API</div>
              <div className="text-blue-200">RESTful API Integration</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">Mobile</div>
              <div className="text-blue-200">Responsive Mobile Design</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">SSL</div>
              <div className="text-blue-200">Bank-Level Security</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Experience These Benefits?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of schools already transforming their operations with TermResult
          </p>
          <Link
            to="/features"
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: colors.primary }}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Explore Features
          </Link>
        </div>
      </div>
    </>
  );
};

export default Benefits;
