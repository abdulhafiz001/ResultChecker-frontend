import { createBrowserRouter } from 'react-router-dom';

// Layouts
import GuestLayout from './layouts/GuestLayout';
import AdminLayout from './layouts/AdminLayout';
import AppLayout from './layouts/AppLayout';
import SchoolLayout from './layouts/SchoolLayout';
import TeacherLayout from './layouts/TeacherLayout';
import SuperAdminLayout from './layouts/SuperAdminLayout';

// Pages
import Home from './pages/Home';
import AdminLogin from './pages/auth/AdminLogin';
import StudentLogin from './pages/auth/StudentLogin';
import SchoolLogin from './pages/auth/SchoolLogin';
import SchoolRegister from './pages/auth/SchoolRegister';
import SuperAdminLogin from './pages/auth/SuperAdminLogin';

// Dashboard pages (placeholders for now)
import AdminDashboard from './pages/admin/AdminDashboard';
import StudentDashboard from './pages/student/StudentDashboard';
import StudentResults from './pages/student/StudentResults';
import StudentProgress from './pages/student/StudentProgress';
import StudentSubjects from './pages/student/StudentSubjects';
import StudentProfile from './pages/student/StudentProfile';
import SchoolDashboard from './pages/school/SchoolDashboard';
import SchoolSettings from './pages/school/SchoolSettings';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import AddStudent from './pages/teacher/AddStudent';
import AddResults from './pages/teacher/AddResults';
import SuperAdminDashboard from './pages/super-admin/SuperAdminDashboard';

const router = createBrowserRouter([
  // Guest routes (public)
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/admin/login',
        element: <AdminLogin />,
      },
      {
        path: '/student/login',
        element: <StudentLogin />,
      },
      {
        path: '/school/login',
        element: <SchoolLogin />,
      },
      {
        path: '/school/register',
        element: <SchoolRegister />,
      },
      {
        path: '/super-admin/login',
        element: <SuperAdminLogin />,
      },
    ],
  },

  // School routes (protected)
  {
    path: "/school",
    element: <SchoolLayout />,
    children: [
      {
        path: 'dashboard',
        element: <SchoolDashboard />,
      },
      {
        path: 'students',
        element: <div>Students Management Page</div>,
      },
      {
        path: 'students/add',
        element: <div>Add Student Page</div>,
      },
      {
        path: 'teachers',
        element: <div>Teachers Management Page</div>,
      },
      {
        path: 'teachers/add',
        element: <div>Add Teacher Page</div>,
      },
      {
        path: 'classes',
        element: <div>Classes Management Page</div>,
      },
      {
        path: 'classes/add',
        element: <div>Add Class Page</div>,
      },
      {
        path: 'subjects',
        element: <div>Subjects Management Page</div>,
      },
      {
        path: 'results',
        element: <div>Results Management Page</div>,
      },
      {
        path: 'results/upload',
        element: <div>Upload Results Page</div>,
      },
      {
        path: 'reports',
        element: <div>Reports Page</div>,
      },
      {
        path: 'settings',
        element: <SchoolSettings />,
      },
    ],
  },

  // Teacher routes (protected)
  {
    path: "/teacher",
    element: <TeacherLayout />,
    children: [
      {
        path: 'dashboard',
        element: <TeacherDashboard />,
      },
      {
        path: 'classes',
        element: <div>My Classes Page</div>,
      },
      {
        path: 'students',
        element: <div>My Students Page</div>,
      },
      {
        path: 'students/add',
        element: <AddStudent />,
      },
      {
        path: 'results',
        element: <div>Results Management Page</div>,
      },
      {
        path: 'results/add',
        element: <AddResults />,
      },
      {
        path: 'attendance',
        element: <div>Attendance Page</div>,
      },
      {
        path: 'reports',
        element: <div>Teacher Reports Page</div>,
      },
    ],
  },

  // Super Admin routes (protected)
  {
    path: "/super-admin",
    element: <SuperAdminLayout />,
    children: [
      {
        path: 'dashboard',
        element: <SuperAdminDashboard />,
      },
      {
        path: 'schools',
        element: <div>Schools Management Page</div>,
      },
      {
        path: 'users',
        element: <div>Users Management Page</div>,
      },
      {
        path: 'analytics',
        element: <div>Platform Analytics Page</div>,
      },
      {
        path: 'reports',
        element: <div>Platform Reports Page</div>,
      },
      {
        path: 'billing',
        element: <div>Billing Management Page</div>,
      },
      {
        path: 'logs',
        element: <div>System Logs Page</div>,
      },
      {
        path: 'settings',
        element: <div>Platform Settings Page</div>,
      },
    ],
  },

  // Admin routes (protected)
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: 'dashboard',
        element: <AdminDashboard />,
      },
      {
        path: 'students',
        element: <div>Students Management Page</div>,
      },
      {
        path: 'results',
        element: <div>Results Management Page</div>,
      },
      {
        path: 'classes',
        element: <div>Classes Management Page</div>,
      },
      {
        path: 'subjects',
        element: <div>Subjects Management Page</div>,
      },
      {
        path: 'teachers',
        element: <div>Teachers Management Page</div>,
      },
      {
        path: 'reports',
        element: <div>Reports Page</div>,
      },
      {
        path: 'settings',
        element: <div>Settings Page</div>,
      },
    ],
  },

  // Student routes (protected)
  {
    path: "/student",
    element: <AppLayout />,
    children: [
      {
        path: 'dashboard',
        element: <StudentDashboard />,
      },
      {
        path: 'results',
        element: <StudentResults />,
      },
      {
        path: 'progress',
        element: <StudentProgress />,
      },
      {
        path: 'subjects',
        element: <StudentSubjects />,
      },
      {
        path: 'profile',
        element: <StudentProfile />,
      },
      {
        path: 'timetable',
        element: <div>Student Timetable Page</div>,
      },
      {
        path: 'events',
        element: <div>Student Events Page</div>,
      },
    ],
  },
]);

export default router;