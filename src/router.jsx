import { createBrowserRouter } from 'react-router-dom';

// Layouts
import GuestLayout from './layouts/GuestLayout';

// Pages
import Home from './pages/Home';
import Benefits from './pages/Benefits';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import ReferEarn from './pages/ReferEarn';
import SchoolRegister from './pages/auth/SchoolRegister';
import Register from './pages/Register';

// Dashboard pages removed - TermResult Official Page only

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
        path: '/benefits',
        element: <Benefits />,
      },
      {
        path: '/features',
        element: <Features />,
      },
      {
        path: '/pricing',
        element: <Pricing />,
      },
      {
        path: '/resources',
        element: <Resources />,
      },
      {
        path: '/refer-earn',
        element: <ReferEarn />,
      },
      {
        path: '/school/register',
        element: <SchoolRegister />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },

  // All other routes removed - TermResult Official Page only
]);

export default router;