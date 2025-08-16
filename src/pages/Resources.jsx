import { Link } from "react-router-dom";
import { colors } from "../constants/colors";

const Resources = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Helpful <span style={{ color: colors.primary }}>Resources</span> & Support
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to get the most out of TermResult. From getting started guides to advanced tutorials,
              we've got you covered.
            </p>
          </div>
        </div>
      </div>

      {/* Resource Categories */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Getting Started */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-6 text-white text-2xl font-bold" style={{ backgroundColor: colors.primary }}>
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Getting Started</h3>
              <p className="text-gray-600 text-center mb-6">
                New to TermResult? Start here with our comprehensive onboarding guides.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Quick start guide</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>School setup tutorial</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>First results upload</span>
                </li>
              </ul>

            </div>

            {/* Video Tutorials */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-6 text-white text-2xl font-bold" style={{ backgroundColor: colors.primaryDark }}>
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Video Tutorials</h3>
              <p className="text-gray-600 text-center mb-6">
                Learn by watching. Step-by-step video guides for every feature.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Dashboard overview</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Result management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Report generation</span>
                </li>
              </ul>

            </div>

            {/* Documentation */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-6 text-white text-2xl font-bold" style={{ backgroundColor: colors.primary }}>
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Documentation</h3>
              <p className="text-gray-600 text-center mb-6">
                Comprehensive technical documentation and API references.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>User manual</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>API documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Best practices</span>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>

      {/* Featured Resources */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Resources</h2>
            <p className="text-xl text-gray-600">Most popular and helpful resources for our users</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Getting Started Guide */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-full mr-4 text-white text-lg font-bold" style={{ backgroundColor: colors.primary }}>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Complete Getting Started Guide</h3>
                  <p className="text-gray-600">Step-by-step guide to set up your school</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                This comprehensive guide walks you through everything from initial setup to your first results upload.
                Perfect for administrators and teachers new to TermResult.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">15 min read • Beginner</span>

              </div>
            </div>

            {/* Video Tutorial Series */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-full mr-4 text-white text-lg font-bold" style={{ backgroundColor: colors.primaryDark }}>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Result Management Series</h3>
                  <p className="text-gray-600">Master result input and management</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                A series of 8 video tutorials covering everything from basic result input to advanced analytics
                and report generation. Perfect for teachers and administrators.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">8 videos • 2 hours total</span>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support & Community */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Support & Community</h2>
            <p className="text-xl text-gray-600">Get help when you need it and connect with other users</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-4 text-white text-2xl font-bold" style={{ backgroundColor: colors.primary }}>
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Get instant help from our support team</p>

            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-4 text-white text-2xl font-bold" style={{ backgroundColor: colors.primaryDark }}>
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">Send us detailed questions</p>

            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-4 text-white text-2xl font-bold" style={{ backgroundColor: colors.primary }}>
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">Speak directly with our team</p>

            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-4 text-white text-2xl font-bold" style={{ backgroundColor: colors.primaryDark }}>
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">User Community</h3>
              <p className="text-gray-600 mb-4">Connect with other schools</p>

            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How do I get started with TermResult?</h3>
              <p className="text-gray-600">Start with our getting started guide and video tutorials. We also offer free onboarding sessions for new customers.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What if I need help with a specific feature?</h3>
              <p className="text-gray-600">Check our documentation, watch relevant video tutorials, or contact our support team for personalized assistance.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Do you offer training for staff?</h3>
              <p className="text-gray-600">Yes! We offer comprehensive training sessions for administrators and teachers. Contact us to schedule training for your team.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can I request new features or report bugs?</h3>
              <p className="text-gray-600">Absolutely! We welcome feature requests and bug reports. Use our feedback form or contact support directly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need More Help?</h2>
          <p className="text-xl text-blue-200 mb-8">
            Our support team is here to help you succeed with TermResult
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              to="/features"
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-all duration-200"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
