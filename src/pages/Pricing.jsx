import { Link } from "react-router-dom";
import { colors } from "../constants/colors";

const Pricing = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Simple, <span style={{ color: colors.primary }}>Transparent</span> Pricing
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your school. All plans include our core features with no hidden fees.
              Scale up or down as your needs change.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">Free</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 mb-8">Perfect for small schools getting started</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Limited to 10 students</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Basic result management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Student portal access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Basic reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Email support</span>
                </li>
              </ul>
              
              <button className="w-full py-3 px-6 border-2 border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200">
                Get Started Free
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">₦3,000</span>
                  <span className="text-gray-600">/student per term</span>
                </div>
                <p className="text-gray-600 mb-8">Ideal for growing schools</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Unlimited students</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">All Starter package features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Advanced result management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Teacher management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Class & subject management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Advanced analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Priority support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Custom reports</span>
                </li>
              </ul>
              
              <button 
                className="w-full py-3 px-6 rounded-md text-white font-medium transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: colors.primary }}
              >
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">₦10,000</span>
                  <span className="text-gray-600">/student per term</span>
                </div>
                <p className="text-gray-600 mb-8">For large schools and institutions</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Unlimited students</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">All Starter & Professional features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Mobile app for the school</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">API access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Custom integrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Dedicated support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Training & onboarding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">SLA guarantee</span>
                </li>
              </ul>
              
              <button className="w-full py-3 px-6 border-2 border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Pricing Info */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">Enhance your experience with these optional services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-4 text-white text-2xl font-bold" style={{ backgroundColor: colors.primary }}>
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Setup & Training</h3>
              <p className="text-gray-600 mb-4">One-time setup fee</p>
              <p className="text-2xl font-bold text-gray-900">Contact Us</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-4 text-white text-2xl font-bold" style={{ backgroundColor: colors.primaryDark }}>
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Mobile App</h3>
              <p className="text-gray-600 mb-4">Per month per user</p>
              <p className="text-2xl font-bold text-gray-900">Contact Us</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-4 text-white text-2xl font-bold" style={{ backgroundColor: colors.primary }}>
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">API Access</h3>
              <p className="text-gray-600 mb-4">Per month</p>
              <p className="text-2xl font-bold text-gray-900">Contact Us</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-4 text-white text-2xl font-bold" style={{ backgroundColor: colors.primaryDark }}>
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Custom Development</h3>
              <p className="text-gray-600 mb-4">Per hour</p>
              <p className="text-2xl font-bold text-gray-900">Contact Us</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our pricing</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can I change my plan anytime?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Is there a setup fee?</h3>
              <p className="text-gray-600">Setup and training is available as an optional service for ₦50,000. Basic setup is included with all plans.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Do you offer discounts for annual billing?</h3>
              <p className="text-gray-600">Yes! Annual billing saves you 20% compared to monthly billing. Contact us for annual pricing.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept bank transfers, credit cards, and mobile money payments. All payments are processed securely.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose the perfect plan for your school and start transforming your operations today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/features"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200"
            >
              View Features
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: colors.primary }}
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
