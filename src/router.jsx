import { createBrowserRouter } from 'react-router-dom';

// Layouts
import GuestLayout from './layouts/GuestLayout';
import AdminLayout from './layouts/AdminLayout';
import AppLayout from './layouts/AppLayout';

// Pages
import Home from './pages/Home';
import AdminLogin from './pages/auth/AdminLogin';
import StudentLogin from './pages/auth/StudentLogin';

// Dashboard pages (placeholders for now)
import AdminDashboard from './pages/admin/AdminDashboard';
import StudentDashboard from './pages/student/StudentDashboard';

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
        element: <div>My Results Page</div>,
      },
      {
        path: 'progress',
        element: <div>Academic Progress Page</div>,
      },
      {
        path: 'subjects',
        element: <div>My Subjects Page</div>,
      },
      {
        path: 'attendance',
        element: <div>Attendance Page</div>,
      },
      {
        path: 'profile',
        element: <div>Profile Page</div>,
      },
      {
        path: 'notifications',
        element: <div>Notifications Page</div>,
      },
    ],
  },
]);

export default router;