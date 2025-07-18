import { useState, useEffect } from 'react';
import { colors } from '../../constants/colors';

const AddResults = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedTerm, setSelectedTerm] = useState('');
  const [selectedSession, setSelectedSession] = useState('2023/2024');
  const [examType, setExamType] = useState('');
  const [results, setResults] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Teacher's assigned classes and subjects (would come from API in real app)
  const teacherClasses = ['JSS 1A', 'JSS 1B', 'JSS 2A'];
  const teacherSubjects = ['Mathematics', 'Basic Science'];
  const terms = ['First Term', 'Second Term', 'Third Term'];
  const sessions = ['2023/2024', '2024/2025'];
  const examTypes = ['First Test', 'Second Test', 'Mid-Term Exam', 'Final Exam'];

  // Sample students (would come from API based on selected class)
  const sampleStudents = [
    { id: 1, admissionNumber: 'SA/2024/001', name: 'John Doe', currentScore: '' },
    { id: 2, admissionNumber: 'SA/2024/002', name: 'Jane Smith', currentScore: '' },
    { id: 3, admissionNumber: 'SA/2024/003', name: 'Mike Johnson', currentScore: '' },
    { id: 4, admissionNumber: 'SA/2024/004', name: 'Sarah Wilson', currentScore: '' },
    { id: 5, admissionNumber: 'SA/2024/005', name: 'David Brown', currentScore: '' },
  ];

  const handleClassSubjectChange = () => {
    if (selectedClass && selectedSubject && selectedTerm && examType) {
      // Initialize results for students in the selected class
      const initialResults = sampleStudents.map(student => ({
        ...student,
        score: '',
        grade: '',
        remark: ''
      }));
      setResults(initialResults);
    } else {
      setResults([]);
    }
  };

  const calculateGrade = (score) => {
    const numScore = parseInt(score);
    if (numScore >= 90) return 'A+';
    if (numScore >= 80) return 'A';
    if (numScore >= 70) return 'B+';
    if (numScore >= 60) return 'B';
    if (numScore >= 50) return 'C';
    if (numScore >= 40) return 'D';
    return 'F';
  };

  const getGradeColor = (grade) => {
    switch (grade) {
      case 'A+':
      case 'A':
        return 'text-green-600 bg-green-100';
      case 'B+':
      case 'B':
        return 'text-blue-600 bg-blue-100';
      case 'C':
        return 'text-yellow-600 bg-yellow-100';
      case 'D':
        return 'text-orange-600 bg-orange-100';
      case 'F':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const handleScoreChange = (studentId, score) => {
    setResults(results.map(result => {
      if (result.id === studentId) {
        const grade = score ? calculateGrade(score) : '';
        return {
          ...result,
          score: score,
          grade: grade,
          remark: score ? (parseInt(score) >= 40 ? 'Pass' : 'Fail') : ''
        };
      }
      return result;
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedClass || !selectedSubject || !selectedTerm || !examType) {
      alert('Please select class, subject, term, and exam type');
      return;
    }

    const validResults = results.filter(result => result.score !== '');
    if (validResults.length === 0) {
      alert('Please enter at least one score');
      return;
    }

    setIsSubmitting(true);

    try {
      const submissionData = {
        class: selectedClass,
        subject: selectedSubject,
        term: selectedTerm,
        session: selectedSession,
        examType: examType,
        results: validResults
      };

      console.log('Submitting results:', submissionData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert(`Successfully submitted ${validResults.length} results for ${selectedSubject} - ${selectedClass}`);
      
      // Reset form
      setSelectedClass('');
      setSelectedSubject('');
      setSelectedTerm('');
      setExamType('');
      setResults([]);
      
    } catch (error) {
      alert('Error submitting results. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Update results when class/subject selection changes
  useEffect(() => {
    handleClassSubjectChange();
  }, [selectedClass, selectedSubject, selectedTerm, examType]);

  const getMaxScore = () => {
    switch (examType) {
      case 'First Test':
      case 'Second Test':
        return 20;
      case 'Mid-Term Exam':
        return 30;
      case 'Final Exam':
        return 100;
      default:
        return 100;
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Add Student Results</h1>
        <p className="text-gray-600">Input examination scores for your students</p>
      </div>

      <div className="bg-white shadow rounded-lg">
        <form onSubmit={handleSubmit} className="p-6">
          {/* Selection Criteria */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Examination Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div>
                <label htmlFor="class" className="block text-sm font-medium text-gray-700">
                  Class *
                </label>
                <select
                  id="class"
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select Class</option>
                  {teacherClasses.map(className => (
                    <option key={className} value={className}>{className}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject *
                </label>
                <select
                  id="subject"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select Subject</option>
                  {teacherSubjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="term" className="block text-sm font-medium text-gray-700">
                  Term *
                </label>
                <select
                  id="term"
                  value={selectedTerm}
                  onChange={(e) => setSelectedTerm(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select Term</option>
                  {terms.map(term => (
                    <option key={term} value={term}>{term}</option>
                  ))}
                </select>
              </div>

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
                <label htmlFor="examType" className="block text-sm font-medium text-gray-700">
                  Exam Type *
                </label>
                <select
                  id="examType"
                  value={examType}
                  onChange={(e) => setExamType(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select Exam Type</option>
                  {examTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            {examType && (
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
                <p className="text-sm text-blue-800">
                  <strong>Maximum Score:</strong> {getMaxScore()} marks
                </p>
              </div>
            )}
          </div>

          {/* Results Input Table */}
          {results.length > 0 && (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Student Results - {selectedSubject} ({selectedClass})
                </h3>
                <div className="text-sm text-gray-500">
                  {results.filter(r => r.score !== '').length} of {results.length} scores entered
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        S/N
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Admission Number
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Student Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Score (/{getMaxScore()})
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Grade
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Remark
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {results.map((student, index) => (
                      <tr key={student.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {student.admissionNumber}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {student.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="number"
                            min="0"
                            max={getMaxScore()}
                            value={student.score}
                            onChange={(e) => handleScoreChange(student.id, e.target.value)}
                            className="w-20 px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="0"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {student.grade && (
                            <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getGradeColor(student.grade)}`}>
                              {student.grade}
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {student.remark}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Quick Actions */}
              <div className="mt-4 flex justify-between items-center">
                <div className="flex space-x-2">
                  <button
                    type="button"
                    onClick={() => {
                      const score = prompt('Enter score for all students:');
                      if (score && !isNaN(score) && score >= 0 && score <= getMaxScore()) {
                        results.forEach(student => handleScoreChange(student.id, score));
                      }
                    }}
                    className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-200"
                  >
                    Fill All
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      results.forEach(student => handleScoreChange(student.id, ''));
                    }}
                    className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-200"
                  >
                    Clear All
                  </button>
                </div>

                <div className="text-sm text-gray-500">
                  Average: {results.filter(r => r.score !== '').length > 0 
                    ? (results.filter(r => r.score !== '').reduce((sum, r) => sum + parseInt(r.score || 0), 0) / results.filter(r => r.score !== '').length).toFixed(1)
                    : '0'
                  }
                </div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          {results.length > 0 && (
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors duration-200"
                onClick={() => {
                  setSelectedClass('');
                  setSelectedSubject('');
                  setSelectedTerm('');
                  setExamType('');
                  setResults([]);
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting || results.filter(r => r.score !== '').length === 0}
                className={`px-6 py-2 text-sm font-medium text-white rounded-md transition-all duration-200 ${
                  isSubmitting || results.filter(r => r.score !== '').length === 0
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:opacity-90'
                }`}
                style={{ backgroundColor: colors.primary }}
              >
                {isSubmitting ? 'Submitting Results...' : 'Submit Results'}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddResults;
