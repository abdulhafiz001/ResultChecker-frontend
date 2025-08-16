import { useState } from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../../constants/colors';

const SchoolRegister = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Basic Information
    fullName: '',
    schoolName: '',
    schoolEmail: '',
    schoolType: 'secondary',
    
    // Step 2: Location & Contact
    state: '',
    lga: '',
    address: '',
    phoneNumber: '',
    alternatePhone: '',
    
    // Step 3: Credentials
    username: '',
    emisCode: '',
    
    // Step 4: School Details
    approximateStudents: '',
    approximateTeachers: '',
    hasJSS1: true,
    hasJSS2: true,
    hasJSS3: true,
    hasSS1: true,
    hasSS2: true,
    hasSS3: true,
  });

  const [errors, setErrors] = useState({});

  const steps = [
    { number: 1, title: 'Basic Information', description: 'School and admin details' },
    { number: 2, title: 'Location & Contact', description: 'Address and contact information' },
    { number: 3, title: 'Credentials', description: 'Login details and school codes' },
    { number: 4, title: 'School Details', description: 'Students, teachers, and classes' },
  ];

  const nigerianStates = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
    'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe',
    'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara',
    'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau',
    'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
  ];

  const schoolTypes = [
    'Primary School',
    'Secondary School',
    'Primary & Secondary School',
    'Nursery & Primary School',
    'Nursery, Primary & Secondary School'
  ];

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

  const validateStep = (step) => {
    const newErrors = {};
    
    switch (step) {
      case 1:
        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.schoolName.trim()) newErrors.schoolName = 'School name is required';
        if (formData.schoolEmail && !/\S+@\S+\.\S+/.test(formData.schoolEmail)) {
          newErrors.schoolEmail = 'Please enter a valid email address';
        }
        break;
      case 2:
        if (!formData.state) newErrors.state = 'State is required';
        if (!formData.lga.trim()) newErrors.lga = 'LGA is required';
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
        break;
      case 3:
        if (!formData.username.trim()) newErrors.username = 'Username is required';
        if (formData.username.length < 3) newErrors.username = 'Username must be at least 3 characters';
        break;
      case 4:
        if (!formData.approximateStudents) newErrors.approximateStudents = 'Number of students is required';
        if (!formData.approximateTeachers) newErrors.approximateTeachers = 'Number of teachers is required';
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      try {
        // Create email content
        const emailSubject = 'New School Registration - TermResult';
        const emailBody = `
New School Registration Details:

ADMINISTRATOR INFORMATION:
Full Name: ${formData.fullName}

SCHOOL INFORMATION:
School Name: ${formData.schoolName}
School Email: ${formData.schoolEmail || 'Not provided'}
School Type: ${formData.schoolType}
Username: ${formData.username}

LOCATION & CONTACT:
State: ${formData.state}
LGA: ${formData.lga}
Address: ${formData.address}
Phone Number: ${formData.phoneNumber}
Alternate Phone: ${formData.alternatePhone || 'Not provided'}

SCHOOL DETAILS:
Approximate Students: ${formData.approximateStudents}
Approximate Teachers: ${formData.approximateTeachers}
EMIS Code: ${formData.emisCode || 'Not provided'}

CLASSES AVAILABLE:
JSS 1: ${formData.hasJSS1 ? 'Yes' : 'No'}
JSS 2: ${formData.hasJSS2 ? 'Yes' : 'No'}
JSS 3: ${formData.hasJSS3 ? 'Yes' : 'No'}
SS 1: ${formData.hasSS1 ? 'Yes' : 'No'}
SS 2: ${formData.hasSS2 ? 'Yes' : 'No'}
SS 3: ${formData.hasSS3 ? 'Yes' : 'No'}

Registration submitted on: ${new Date().toLocaleString()}
        `;

        // Create mailto link
        const mailtoLink = `mailto:termresult@outlook.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        setIsSubmitted(true);
        
      } catch (error) {
        console.error('Error submitting registration:', error);
        alert('There was an error submitting your registration. Please try again.');
      }
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Your Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  errors.fullName ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'
                }`}
                placeholder="Enter your full name"
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700">
                School Name *
              </label>
              <input
                type="text"
                name="schoolName"
                id="schoolName"
                value={formData.schoolName}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  errors.schoolName ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'
                }`}
                placeholder="Enter school name"
              />
              {errors.schoolName && <p className="mt-1 text-sm text-red-600">{errors.schoolName}</p>}
            </div>

            <div>
              <label htmlFor="schoolEmail" className="block text-sm font-medium text-gray-700">
                School Email (Optional)
              </label>
              <input
                type="email"
                name="schoolEmail"
                id="schoolEmail"
                value={formData.schoolEmail}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  errors.schoolEmail ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'
                }`}
                placeholder="school@example.com"
              />
              {errors.schoolEmail && <p className="mt-1 text-sm text-red-600">{errors.schoolEmail}</p>}
            </div>

            <div>
              <label htmlFor="schoolType" className="block text-sm font-medium text-gray-700">
                School Type *
              </label>
              <select
                name="schoolType"
                id="schoolType"
                value={formData.schoolType}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {schoolTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                State *
              </label>
              <select
                name="state"
                id="state"
                value={formData.state}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  errors.state ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'
                }`}
              >
                <option value="">Select State</option>
                {nigerianStates.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state}</p>}
            </div>

            <div>
              <label htmlFor="lga" className="block text-sm font-medium text-gray-700">
                Local Government Area *
              </label>
              <input
                type="text"
                name="lga"
                id="lga"
                value={formData.lga}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  errors.lga ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'
                }`}
                placeholder="Enter LGA"
              />
              {errors.lga && <p className="mt-1 text-sm text-red-600">{errors.lga}</p>}
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                School Address *
              </label>
              <textarea
                name="address"
                id="address"
                rows={3}
                value={formData.address}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  errors.address ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'
                }`}
                placeholder="Enter complete school address"
              />
              {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  errors.phoneNumber ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'
                }`}
                placeholder="08012345678"
              />
              {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>}
            </div>

            <div>
              <label htmlFor="alternatePhone" className="block text-sm font-medium text-gray-700">
                Alternate Phone Number (Optional)
              </label>
              <input
                type="tel"
                name="alternatePhone"
                id="alternatePhone"
                value={formData.alternatePhone}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                placeholder="08012345678"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                School Username *
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  errors.username ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'
                }`}
                placeholder="Choose a unique username"
              />
              {errors.username && <p className="mt-1 text-sm text-red-600">{errors.username}</p>}
              <p className="mt-1 text-xs text-gray-500">This will be used by school administrators to login</p>
            </div>

            <div>
              <label htmlFor="emisCode" className="block text-sm font-medium text-gray-700">
                EMIS Code (Optional)
              </label>
              <input
                type="text"
                name="emisCode"
                id="emisCode"
                value={formData.emisCode}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                placeholder="Enter EMIS code if available"
              />
              <p className="mt-1 text-xs text-gray-500">Education Management Information System code</p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="approximateStudents" className="block text-sm font-medium text-gray-700">
                  Approximate Number of Students *
                </label>
                <select
                  name="approximateStudents"
                  id="approximateStudents"
                  value={formData.approximateStudents}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    errors.approximateStudents ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'
                  }`}
                >
                  <option value="">Select range</option>
                  <option value="1-50">1 - 50 students</option>
                  <option value="51-100">51 - 100 students</option>
                  <option value="101-200">101 - 200 students</option>
                  <option value="201-500">201 - 500 students</option>
                  <option value="501-1000">501 - 1000 students</option>
                  <option value="1000+">1000+ students</option>
                </select>
                {errors.approximateStudents && <p className="mt-1 text-sm text-red-600">{errors.approximateStudents}</p>}
              </div>

              <div>
                <label htmlFor="approximateTeachers" className="block text-sm font-medium text-gray-700">
                  Approximate Number of Teachers *
                </label>
                <select
                  name="approximateTeachers"
                  id="approximateTeachers"
                  value={formData.approximateTeachers}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    errors.approximateTeachers ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'
                  }`}
                >
                  <option value="">Select range</option>
                  <option value="1-5">1 - 5 teachers</option>
                  <option value="6-10">6 - 10 teachers</option>
                  <option value="11-20">11 - 20 teachers</option>
                  <option value="21-50">21 - 50 teachers</option>
                  <option value="51-100">51 - 100 teachers</option>
                  <option value="100+">100+ teachers</option>
                </select>
                {errors.approximateTeachers && <p className="mt-1 text-sm text-red-600">{errors.approximateTeachers}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Classes/Levels Available *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { key: 'hasJSS1', label: 'JSS 1' },
                  { key: 'hasJSS2', label: 'JSS 2' },
                  { key: 'hasJSS3', label: 'JSS 3' },
                  { key: 'hasSS1', label: 'SS 1' },
                  { key: 'hasSS2', label: 'SS 2' },
                  { key: 'hasSS3', label: 'SS 3' },
                ].map(({ key, label }) => (
                  <div key={key} className="flex items-center">
                    <input
                      type="checkbox"
                      name={key}
                      id={key}
                      checked={formData[key]}
                      onChange={handleInputChange}
                      className="h-4 w-4 rounded border-gray-300 focus:ring-2 focus:ring-offset-2"
                      style={{ accentColor: colors.primary }}
                    />
                    <label htmlFor={key} className="ml-2 text-sm text-gray-700">
                      {label}
                    </label>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Select all the class levels your school offers
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex flex-col items-center justify-center mb-6">
            <img src="/termresult logo png.png" alt="TermResult Logo" className="h-40 w-auto mb-4" />
          </div>
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Submitted Successfully!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for registering your school with TermResult. We have opened your email client to send the registration details to our team.
            </p>
            <p className="text-gray-600 mb-6">
              Please send the email to complete your registration. Our team will review your application and contact you within 24-48 hours.
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: colors.primary }}
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex flex-col items-center justify-center mb-6">
          <img src="/termresult logo png.png" alt="TermResult Logo" className="h-40 w-auto mb-4" />
        </div>
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Register Your School
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Join the platform and start managing your school results
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                    currentStep >= step.number 
                      ? 'text-white' 
                      : 'text-gray-500 border-2 border-gray-300'
                  }`} style={{
                    backgroundColor: currentStep >= step.number ? colors.primary : 'transparent'
                  }}>
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-0.5 ml-2 ${
                      currentStep > step.number ? 'bg-indigo-600' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">
                {steps[currentStep - 1].title}
              </h3>
              <p className="text-sm text-gray-500">
                {steps[currentStep - 1].description}
              </p>
            </div>
          </div>

          <form onSubmit={currentStep === 4 ? handleSubmit : (e) => e.preventDefault()}>
            {renderStepContent()}

            <div className="mt-8 flex justify-between">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  currentStep === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 bg-gray-200 hover:bg-gray-300'
                } transition-colors duration-200`}
              >
                Previous
              </button>

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2 text-sm font-medium text-white rounded-md transition-all duration-200 hover:opacity-90"
                  style={{ backgroundColor: colors.primary }}
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2 text-sm font-medium text-white rounded-md transition-all duration-200 hover:opacity-90"
                  style={{ backgroundColor: colors.primary }}
                >
                  Complete Registration
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SchoolRegister;
