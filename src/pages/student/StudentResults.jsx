import { useState } from 'react';
import { colors } from '../../constants/colors';

const StudentResults = () => {
  const [selectedTerm, setSelectedTerm] = useState('Second Term');
  const [selectedSession, setSelectedSession] = useState('2023/2024');

  const studentInfo = {
    name: "Adebayo Sarah",
    admissionNumber: "NA/2024/001",
    class: "JSS 3A",
    session: "2023/2024"
  };

  const terms = ['First Term', 'Second Term', 'Third Term'];
  const sessions = ['2022/2023', '2023/2024', '2024/2025'];

  const results = {
    'First Term': [
      { subject: 'Mathematics', firstTest: 18, secondTest: 16, exam: 85, total: 119, grade: 'A', position: 3, remark: 'Excellent' },
      { subject: 'English Language', firstTest: 15, secondTest: 17, exam: 78, total: 110, grade: 'B+', position: 8, remark: 'Very Good' },
      { subject: 'Basic Science', firstTest: 19, secondTest: 18, exam: 92, total: 129, grade: 'A+', position: 1, remark: 'Outstanding' },
      { subject: 'Social Studies', firstTest: 14, secondTest: 15, exam: 76, total: 105, grade: 'B+', position: 12, remark: 'Good' },
      { subject: 'Civic Education', firstTest: 16, secondTest: 17, exam: 82, total: 115, grade: 'A', position: 5, remark: 'Very Good' },
      { subject: 'Christian Religious Studies', firstTest: 17, secondTest: 19, exam: 88, total: 124, grade: 'A+', position: 2, remark: 'Excellent' },
      { subject: 'French', firstTest: 12, secondTest: 14, exam: 65, total: 91, grade: 'B', position: 18, remark: 'Good' },
      { subject: 'Computer Studies', firstTest: 18, secondTest: 17, exam: 89, total: 124, grade: 'A+', position: 4, remark: 'Excellent' },
    ],
    'Second Term': [
      { subject: 'Mathematics', firstTest: 17, secondTest: 18, exam: 87, total: 122, grade: 'A+', position: 2, remark: 'Excellent' },
      { subject: 'English Language', firstTest: 16, secondTest: 18, exam: 80, total: 114, grade: 'A', position: 6, remark: 'Very Good' },
      { subject: 'Basic Science', firstTest: 20, secondTest: 19, exam: 94, total: 133, grade: 'A+', position: 1, remark: 'Outstanding' },
      { subject: 'Social Studies', firstTest: 15, secondTest: 16, exam: 78, total: 109, grade: 'B+', position: 10, remark: 'Good' },
      { subject: 'Civic Education', firstTest: 17, secondTest: 18, exam: 84, total: 119, grade: 'A', position: 4, remark: 'Very Good' },
      { subject: 'Christian Religious Studies', firstTest: 18, secondTest: 19, exam: 90, total: 127, grade: 'A+', position: 1, remark: 'Outstanding' },
      { subject: 'French', firstTest: 13, secondTest: 15, exam: 68, total: 96, grade: 'B', position: 15, remark: 'Good' },
      { subject: 'Computer Studies', firstTest: 19, secondTest: 18, exam: 91, total: 128, grade: 'A+', position: 3, remark: 'Excellent' },
    ],
    'Third Term': []
  };

  const getGradeColor = (grade) => {
    switch (grade) {
      case 'A+':
        return 'text-green-800 bg-green-100';
      case 'A':
        return 'text-green-700 bg-green-50';
      case 'B+':
        return 'text-blue-700 bg-blue-50';
      case 'B':
        return 'text-blue-600 bg-blue-50';
      case 'C':
        return 'text-yellow-700 bg-yellow-50';
      case 'D':
        return 'text-orange-700 bg-orange-50';
      case 'F':
        return 'text-red-700 bg-red-50';
      default:
        return 'text-gray-700 bg-gray-50';
    }
  };

  const currentResults = results[selectedTerm] || [];
  const totalScore = currentResults.reduce((sum, result) => sum + result.total, 0);
  const averageScore = currentResults.length > 0 ? (totalScore / currentResults.length).toFixed(1) : 0;
  const overallPosition = currentResults.length > 0 ? Math.round(currentResults.reduce((sum, result) => sum + result.position, 0) / currentResults.length) : 0;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">My Results</h1>
        <p className="text-gray-600">View your academic performance and progress</p>
      </div>

      {/* Student Info Card */}
      <div className="bg-white shadow rounded-lg mb-6 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{studentInfo.name}</h2>
            <p className="text-sm text-gray-500">
              {studentInfo.class} • {studentInfo.admissionNumber} • {studentInfo.session}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <label htmlFor="session" className="block text-sm font-medium text-gray-700">
                Session
              </label>
              <select
                id="session"
                value={selectedSession}
                onChange={(e) => setSelectedSession(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {sessions.map(session => (
                  <option key={session} value={session}>{session}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="term" className="block text-sm font-medium text-gray-700">
                Term
              </label>
              <select
                id="term"
                value={selectedTerm}
                onChange={(e) => setSelectedTerm(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {terms.map(term => (
                  <option key={term} value={term}>{term}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      {currentResults.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-md flex items-center justify-center text-white" style={{ backgroundColor: colors.primary }}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Subjects
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {currentResults.length}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-md flex items-center justify-center text-white bg-green-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Average Score
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {averageScore}%
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-md flex items-center justify-center text-white bg-yellow-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Class Position
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {overallPosition}{overallPosition === 1 ? 'st' : overallPosition === 2 ? 'nd' : overallPosition === 3 ? 'rd' : 'th'}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-md flex items-center justify-center text-white bg-purple-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Subjects Passed
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {currentResults.filter(r => r.total >= 40).length}/{currentResults.length}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results Table */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            {selectedTerm} Results - {selectedSession}
          </h3>
        </div>
        
        {currentResults.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    1st Test (20)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    2nd Test (20)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Exam (100)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total (140)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Grade
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Remark
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentResults.map((result, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {result.subject}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {result.firstTest}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {result.secondTest}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {result.exam}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {result.total}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getGradeColor(result.grade)}`}>
                        {result.grade}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {result.position}{result.position === 1 ? 'st' : result.position === 2 ? 'nd' : result.position === 3 ? 'rd' : 'th'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {result.remark}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="px-6 py-12 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No results available</h3>
            <p className="mt-1 text-sm text-gray-500">
              Results for {selectedTerm} have not been published yet.
            </p>
          </div>
        )}
      </div>

      {/* Print/Download Actions */}
      {currentResults.length > 0 && (
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
          >
            Print Results
          </button>
          <button
            className="px-4 py-2 text-sm font-medium text-white rounded-md hover:opacity-90 transition-opacity duration-200"
            style={{ backgroundColor: colors.primary }}
          >
            Download PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentResults;
