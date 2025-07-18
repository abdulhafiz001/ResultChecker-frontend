import { colors } from '../../constants/colors';

const TeacherDashboard = () => {
  const teacherInfo = {
    name: "Mrs. Johnson",
    employeeId: "TCH001",
    role: "Mathematics Teacher",
    formClass: "JSS 1A",
    assignedClasses: ["JSS 1A", "JSS 1B", "JSS 2A"],
    subjects: ["Mathematics", "Basic Science"]
  };

  const quickStats = [
    {
      name: 'My Students',
      value: 105,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      color: colors.primary,
      description: 'Total students across all classes'
    },
    {
      name: 'My Classes',
      value: teacherInfo.assignedClasses.length,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: '#10B981',
      description: 'Classes assigned to you'
    },
    {
      name: 'Subjects',
      value: teacherInfo.subjects.length,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: '#8B5CF6',
      description: 'Subjects you teach'
    },
    {
      name: 'Pending Results',
      value: 8,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: '#F59E0B',
      description: 'Results awaiting input'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'result_added',
      message: 'Added Mathematics results for JSS 1A',
      time: '2 hours ago',
      class: 'JSS 1A'
    },
    {
      id: 2,
      type: 'student_added',
      message: 'Added new student: John Doe to JSS 1A',
      time: '4 hours ago',
      class: 'JSS 1A'
    },
    {
      id: 3,
      type: 'attendance_marked',
      message: 'Marked attendance for JSS 2A',
      time: '1 day ago',
      class: 'JSS 2A'
    },
    {
      id: 4,
      type: 'result_updated',
      message: 'Updated Basic Science results for JSS 1B',
      time: '2 days ago',
      class: 'JSS 1B'
    }
  ];

  const quickActions = [
    {
      name: 'Add Student',
      href: '/teacher/students/add',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
      color: colors.primary,
      description: 'Add new student to your class'
    },
    {
      name: 'Input Results',
      href: '/teacher/results/add',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      color: '#10B981',
      description: 'Add or update student results'
    },
    {
      name: 'Mark Attendance',
      href: '/teacher/attendance',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      color: '#F59E0B',
      description: 'Take class attendance'
    },
    {
      name: 'View Reports',
      href: '/teacher/reports',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: '#8B5CF6',
      description: 'Generate class reports'
    }
  ];

  const myClasses = [
    { name: 'JSS 1A', students: 35, isFormClass: true, nextClass: 'Mathematics - 10:00 AM' },
    { name: 'JSS 1B', students: 32, isFormClass: false, nextClass: 'Mathematics - 11:00 AM' },
    { name: 'JSS 2A', students: 38, isFormClass: false, nextClass: 'Basic Science - 2:00 PM' },
  ];

  return (
    <div>
      {/* Welcome Section */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome back, {teacherInfo.name}!
              </h1>
              <p className="text-sm text-gray-500">
                {teacherInfo.role} • Employee ID: {teacherInfo.employeeId}
              </p>
              <p className="text-sm font-medium text-indigo-600 mt-1">
                Form Teacher: {teacherInfo.formClass}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Today's Schedule</p>
              <p className="text-lg font-bold" style={{ color: colors.primary }}>
                3 Classes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {quickStats.map((stat) => (
          <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div 
                    className="w-8 h-8 rounded-md flex items-center justify-center text-white"
                    style={{ backgroundColor: stat.color }}
                  >
                    {stat.icon}
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="text-2xl font-semibold text-gray-900">
                      {stat.value}
                    </dd>
                    <dd className="text-xs text-gray-500 mt-1">
                      {stat.description}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickActions.map((action) => (
              <a
                key={action.name}
                href={action.href}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200"
              >
                <div>
                  <span 
                    className="rounded-lg inline-flex p-3 text-white ring-4 ring-white"
                    style={{ backgroundColor: action.color }}
                  >
                    {action.icon}
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {action.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {action.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* My Classes */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              My Classes
            </h3>
            <div className="space-y-4">
              {myClasses.map((classItem) => (
                <div key={classItem.name} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h4 className="text-sm font-medium text-gray-900">
                        {classItem.name}
                      </h4>
                      {classItem.isFormClass && (
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                          Form Class
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {classItem.students} students • Next: {classItem.nextClass}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <a
                      href={`/teacher/classes/${classItem.name.toLowerCase().replace(' ', '-')}`}
                      className="text-sm text-indigo-600 hover:text-indigo-900"
                    >
                      View
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Recent Activities
            </h3>
            <div className="flow-root">
              <ul className="-mb-8">
                {recentActivities.map((activity, activityIdx) => (
                  <li key={activity.id}>
                    <div className="relative pb-8">
                      {activityIdx !== recentActivities.length - 1 ? (
                        <span
                          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="relative flex space-x-3">
                        <div>
                          <span 
                            className="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white text-white"
                            style={{ backgroundColor: colors.primary }}
                          >
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-sm text-gray-500">
                              {activity.message}
                            </p>
                            <p className="text-xs text-gray-400">
                              Class: {activity.class}
                            </p>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-gray-500">
                            {activity.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
