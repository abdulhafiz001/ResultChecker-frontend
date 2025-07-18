import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import router from '../router';

// Mock all the page components to avoid complex dependencies
vi.mock('../pages/Home', () => ({
  default: () => <div data-testid="home-page">Home Page</div>
}));

vi.mock('../pages/auth/AdminLogin', () => ({
  default: () => <div data-testid="admin-login-page">Admin Login Page</div>
}));

vi.mock('../pages/auth/StudentLogin', () => ({
  default: () => <div data-testid="student-login-page">Student Login Page</div>
}));

vi.mock('../pages/auth/SchoolLogin', () => ({
  default: () => <div data-testid="school-login-page">School Login Page</div>
}));

vi.mock('../pages/auth/SchoolRegister', () => ({
  default: () => <div data-testid="school-register-page">School Register Page</div>
}));

vi.mock('../pages/auth/SuperAdminLogin', () => ({
  default: () => <div data-testid="super-admin-login-page">Super Admin Login Page</div>
}));

vi.mock('../pages/student/StudentDashboard', () => ({
  default: () => <div data-testid="student-dashboard-page">Student Dashboard Page</div>
}));

vi.mock('../pages/student/StudentResults', () => ({
  default: () => <div data-testid="student-results-page">Student Results Page</div>
}));

vi.mock('../pages/student/StudentProfile', () => ({
  default: () => <div data-testid="student-profile-page">Student Profile Page</div>
}));

vi.mock('../pages/school/SchoolDashboard', () => ({
  default: () => <div data-testid="school-dashboard-page">School Dashboard Page</div>
}));

vi.mock('../pages/school/SchoolSettings', () => ({
  default: () => <div data-testid="school-settings-page">School Settings Page</div>
}));

vi.mock('../pages/teacher/TeacherDashboard', () => ({
  default: () => <div data-testid="teacher-dashboard-page">Teacher Dashboard Page</div>
}));

vi.mock('../pages/teacher/AddStudent', () => ({
  default: () => <div data-testid="add-student-page">Add Student Page</div>
}));

vi.mock('../pages/teacher/AddResults', () => ({
  default: () => <div data-testid="add-results-page">Add Results Page</div>
}));

vi.mock('../pages/super-admin/SuperAdminDashboard', () => ({
  default: () => <div data-testid="super-admin-dashboard-page">Super Admin Dashboard Page</div>
}));

vi.mock('../pages/admin/AdminDashboard', () => ({
  default: () => <div data-testid="admin-dashboard-page">Admin Dashboard Page</div>
}));

describe('Router Configuration', () => {
  it('renders home page at root path', () => {
    const testRouter = createMemoryRouter(router, {
      initialEntries: ['/']
    });
    
    render(<RouterProvider router={testRouter} />);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  it('renders admin login page', () => {
    const testRouter = createMemoryRouter(router, {
      initialEntries: ['/admin/login']
    });
    
    render(<RouterProvider router={testRouter} />);
    expect(screen.getByTestId('admin-login-page')).toBeInTheDocument();
  });

  it('renders student login page', () => {
    const testRouter = createMemoryRouter(router, {
      initialEntries: ['/student/login']
    });
    
    render(<RouterProvider router={testRouter} />);
    expect(screen.getByTestId('student-login-page')).toBeInTheDocument();
  });

  it('renders school login page', () => {
    const testRouter = createMemoryRouter(router, {
      initialEntries: ['/school/login']
    });
    
    render(<RouterProvider router={testRouter} />);
    expect(screen.getByTestId('school-login-page')).toBeInTheDocument();
  });

  it('renders school register page', () => {
    const testRouter = createMemoryRouter(router, {
      initialEntries: ['/school/register']
    });
    
    render(<RouterProvider router={testRouter} />);
    expect(screen.getByTestId('school-register-page')).toBeInTheDocument();
  });

  it('renders super admin login page', () => {
    const testRouter = createMemoryRouter(router, {
      initialEntries: ['/super-admin/login']
    });
    
    render(<RouterProvider router={testRouter} />);
    expect(screen.getByTestId('super-admin-login-page')).toBeInTheDocument();
  });

  it('renders student dashboard page', () => {
    const testRouter = createMemoryRouter(router, {
      initialEntries: ['/student/dashboard']
    });
    
    render(<RouterProvider router={testRouter} />);
    expect(screen.getByTestId('student-dashboard-page')).toBeInTheDocument();
  });

  it('renders student results page', () => {
    const testRouter = createMemoryRouter(router, {
      initialEntries: ['/student/results']
    });
    
    render(<RouterProvider router={testRouter} />);
    expect(screen.getByTestId('student-results-page')).toBeInTheDocument();
  });

  it('renders student profile page', () => {
    const testRouter = createMemoryRouter(router, {
      initialEntries: ['/student/profile']
    });
    
    render(<RouterProvider router={testRouter} />);
    expect(screen.getByTestId('student-profile-page')).toBeInTheDocument();
  });

  it('renders school dashboard page', () => {
    const testRouter = createMemoryRouter(router, {
      initialEntries: ['/school/dashboard']
    });
    
    render(<RouterProvider router={testRouter} />);
    expect(screen.getByTestId('school-dashboard-page')).toBeInTheDocument();
  });

  it('renders school settings page', () => {
    const testRouter = createMemoryRouter(router, {
      initialEntries: ['/school/settings']
    });
    
    render(<RouterProvider router={testRouter} />);
    expect(screen.getByTestId('school-settings-page')).toBeInTheDocument();
  });

  it('renders teacher dashboard page', () => {
    const testRouter = createMemoryRouter(router, {
      initialEntries: ['/teacher/dashboard']
    });
    
    render(<RouterProvider router={testRouter} />);
    expect(screen.getByTestId('teacher-dashboard-page')).toBeInTheDocument();
  });

  it('renders add student page', () => {
    const testRouter = createMemoryRouter(router, {
      initialEntries: ['/teacher/students/add']
    });
    
    render(<RouterProvider router={testRouter} />);
    expect(screen.getByTestId('add-student-page')).toBeInTheDocument();
  });

  it('renders add results page', () => {
    const testRouter = createMemoryRouter(router, {
      initialEntries: ['/teacher/results/add']
    });
    
    render(<RouterProvider router={testRouter} />);
    expect(screen.getByTestId('add-results-page')).toBeInTheDocument();
  });

  it('renders super admin dashboard page', () => {
    const testRouter = createMemoryRouter(router, {
      initialEntries: ['/super-admin/dashboard']
    });
    
    render(<RouterProvider router={testRouter} />);
    expect(screen.getByTestId('super-admin-dashboard-page')).toBeInTheDocument();
  });

  it('renders admin dashboard page', () => {
    const testRouter = createMemoryRouter(router, {
      initialEntries: ['/admin/dashboard']
    });
    
    render(<RouterProvider router={testRouter} />);
    expect(screen.getByTestId('admin-dashboard-page')).toBeInTheDocument();
  });
});
