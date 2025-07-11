import { colors } from '../../constants/colors';

const StudentDashboard = () => {
  const studentInfo = {
    name: "Adebayo Sarah",
    admissionNumber: "NA/2024/001",
    class: "JSS 3A",
    session: "2023/2024",
    term: "Second Term"
  };

  const recentResults = [
    {
      subject: "Mathematics",
      score: 85,
      grade: "A",
      position: 3,
      total: 45,
      date: "2024-01-15"
    },
    {
      subject: "English Language",
      score: 78,
      grade: "B+",
      position: 8,
      total: 45,
      date: "2024-01-12"
    },
    {
      subject: "Basic Science",
      score: 92,
      grade: "A+",
      position: 1,
      total: 45,
      date: "2024-01-10"
    },
    {
      subject: "Social Studies",
      score: 76,
      grade: "B+",
      position: 12,
      total: 45,
      date: "2024-01-08"
    }
  ];

  const upcomingEvents = [
    {
      title: "Mid-term Examination",
      date: "2024-02-15",
      type: "exam"
    },
    {
      title: "Parent-Teacher Conference",
      date: "2024-02-20",
      type: "meeting"
    },
    {
      title: "Science Fair",
      date: "2024-02-25",
      type: "event"
    }
  ];

  const getGradeColor = (grade) => {
    if (grade.startsWith('A')) return 'text-green-600 bg-green-100';
    if (grade.startsWith('B')) return 'text-blue-600 bg-blue-100';
    if (grade.startsWith('C')) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div>
      {/* Welcome Section */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-16 w-16 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: colors.primary }}>
                {studentInfo.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            <div className="ml-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome back, {studentInfo.name}!
              </h1>
              <p className="text-sm text-gray-500">
                {studentInfo.class} • {studentInfo.admissionNumber} • {studentInfo.session} ({studentInfo.term})
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
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
                    12
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
                <div className="w-8 h-8 rounded-md flex items-center justify-center text-white" style={{ backgroundColor: colors.primaryDark }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Average Score
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    82.8%
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
                <div className="w-8 h-8 rounded-md flex items-center justify-center text-white" style={{ backgroundColor: colors.primary }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Class Position
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    5th
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
                <div className="w-8 h-8 rounded-md flex items-center justify-center text-white" style={{ backgroundColor: colors.primaryDark }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h6m-6 0l-.5 8.5A2 2 0 0013.5 21h-3A2 2 0 018.5 15.5L8 7z" />
                  </svg>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Attendance
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    95%
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Results and Upcoming Events */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Recent Results */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Recent Results
            </h3>
            <div className="space-y-4">
              {recentResults.map((result, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">
                      {result.subject}
                    </h4>
                    <p className="text-xs text-gray-500">
                      Position: {result.position} of {result.total}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">
                        {result.score}%
                      </div>
                      <div className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getGradeColor(result.grade)}`}>
                        {result.grade}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <button
                className="w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ 
                  backgroundColor: colors.primary,
                  focusRingColor: colors.primary 
                }}
              >
                View All Results
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Upcoming Events
            </h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center p-4 border border-gray-200 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: colors.primary }}>
                      {event.type === 'exam' ? '📝' : event.type === 'meeting' ? '👥' : '🎉'}
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-sm font-medium text-gray-900">
                      {event.title}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
