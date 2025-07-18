import { colors } from '../../constants/colors';

const SuperAdminDashboard = () => {
  const platformStats = [
    {
      name: 'Total Schools',
      value: 247,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: colors.primary,
      change: '+12',
      changeType: 'increase',
      description: 'Active schools on platform'
    },
    {
      name: 'Total Students',
      value: '125,847',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      color: '#10B981',
      change: '+2,847',
      changeType: 'increase',
      description: 'Students across all schools'
    },
    {
      name: 'Total Teachers',
      value: '8,456',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: '#8B5CF6',
      change: '+156',
      changeType: 'increase',
      description: 'Teachers using the platform'
    },
    {
      name: 'Monthly Revenue',
      value: '₦2.4M',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: '#F59E0B',
      change: '+18%',
      changeType: 'increase',
      description: 'Platform subscription revenue'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'school_registered',
      message: 'New school "Bright Future Academy" registered',
      time: '2 hours ago',
      user: 'System',
      status: 'success'
    },
    {
      id: 2,
      type: 'payment_received',
      message: 'Payment received from "Excellence High School" - ₦50,000',
      time: '4 hours ago',
      user: 'Billing System',
      status: 'success'
    },
    {
      id: 3,
      type: 'system_alert',
      message: 'High server load detected - Auto-scaling triggered',
      time: '6 hours ago',
      user: 'System Monitor',
      status: 'warning'
    },
    {
      id: 4,
      type: 'user_support',
      message: 'Support ticket resolved for "Unity Secondary School"',
      time: '8 hours ago',
      user: 'Support Team',
      status: 'success'
    },
    {
      id: 5,
      type: 'data_backup',
      message: 'Daily data backup completed successfully',
      time: '12 hours ago',
      user: 'Backup System',
      status: 'success'
    }
  ];

  const topSchools = [
    { name: 'Excellence High School', students: 1250, teachers: 45, revenue: '₦125,000', status: 'Active' },
    { name: 'Unity Secondary School', students: 980, teachers: 38, revenue: '₦98,000', status: 'Active' },
    { name: 'Bright Future Academy', students: 850, teachers: 32, revenue: '₦85,000', status: 'Active' },
    { name: 'Knowledge Heights', students: 720, teachers: 28, revenue: '₦72,000', status: 'Active' },
    { name: 'Success International', students: 650, teachers: 25, revenue: '₦65,000', status: 'Active' }
  ];

  const systemHealth = [
    { metric: 'Server Uptime', value: '99.9%', status: 'excellent' },
    { metric: 'Database Performance', value: '98.5%', status: 'good' },
    { metric: 'API Response Time', value: '145ms', status: 'good' },
    { metric: 'Storage Usage', value: '67%', status: 'warning' },
    { metric: 'Active Sessions', value: '12,847', status: 'excellent' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent':
        return 'text-green-600 bg-green-100';
      case 'good':
        return 'text-blue-600 bg-blue-100';
      case 'warning':
        return 'text-yellow-600 bg-yellow-100';
      case 'error':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'school_registered':
        return '🏫';
      case 'payment_received':
        return '💰';
      case 'system_alert':
        return '⚠️';
      case 'user_support':
        return '🎧';
      case 'data_backup':
        return '💾';
      default:
        return '📋';
    }
  };

  return (
    <div>
      {/* Welcome Section */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Platform Control Center
              </h1>
              <p className="text-sm text-gray-500">
                Monitor and manage the EduManage Pro platform
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">System Status</p>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <p className="text-lg font-bold text-green-600">Operational</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {platformStats.map((stat) => (
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
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                      <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                        stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.changeType === 'increase' ? '↗' : '↘'} {stat.change}
                      </div>
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

      {/* System Health */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
            System Health
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {systemHealth.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                <div className="text-sm text-gray-500 mb-2">{item.metric}</div>
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Top Schools */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Top Performing Schools
            </h3>
            <div className="space-y-4">
              {topSchools.map((school, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">{school.name}</h4>
                    <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                      <span>{school.students} students</span>
                      <span>{school.teachers} teachers</span>
                      <span className="font-medium text-green-600">{school.revenue}/month</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                      {school.status}
                    </span>
                    <div className="ml-2 text-lg font-bold text-gray-500">
                      #{index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="/super-admin/schools"
                className="w-full text-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 block"
              >
                View All Schools
              </a>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Recent Platform Activities
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
                          <span className="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white bg-gray-100 text-sm">
                            {getActivityIcon(activity.type)}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-sm text-gray-500">
                              {activity.message}
                            </p>
                            <p className="text-xs text-gray-400">
                              by {activity.user}
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
            <div className="mt-4">
              <a
                href="/super-admin/logs"
                className="w-full text-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 block"
              >
                View All Activities
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
