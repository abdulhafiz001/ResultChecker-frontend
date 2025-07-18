import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import StudentLogin from '../StudentLogin';

// Mock react-router-dom
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    Link: ({ children, to, ...props }) => (
      <a href={to} {...props}>
        {children}
      </a>
    ),
    useNavigate: () => vi.fn(),
  };
});

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('StudentLogin', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders login form elements', () => {
    renderWithRouter(<StudentLogin />);
    
    expect(screen.getByText('Student Portal')).toBeInTheDocument();
    expect(screen.getByText('Access your academic results and progress')).toBeInTheDocument();
    expect(screen.getByLabelText(/admission number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /access my results/i })).toBeInTheDocument();
  });

  it('displays EduManage Pro branding', () => {
    renderWithRouter(<StudentLogin />);
    
    expect(screen.getByText('EduManage')).toBeInTheDocument();
    expect(screen.getByText('Pro')).toBeInTheDocument();
  });

  it('shows remember me checkbox', () => {
    renderWithRouter(<StudentLogin />);
    
    const rememberMeCheckbox = screen.getByLabelText(/remember me/i);
    expect(rememberMeCheckbox).toBeInTheDocument();
    expect(rememberMeCheckbox).toHaveAttribute('type', 'checkbox');
  });

  it('displays forgot password link', () => {
    renderWithRouter(<StudentLogin />);
    
    const forgotPasswordLink = screen.getByText(/forgot password/i);
    expect(forgotPasswordLink).toBeInTheDocument();
    expect(forgotPasswordLink.closest('a')).toHaveAttribute('href', '/student/forgot-password');
  });

  it('shows other login options', () => {
    renderWithRouter(<StudentLogin />);
    
    expect(screen.getByText('Other login options')).toBeInTheDocument();
    expect(screen.getByText('School Login')).toBeInTheDocument();
    expect(screen.getByText('Super Admin')).toBeInTheDocument();
  });

  it('allows user to input admission number and password', async () => {
    const user = userEvent.setup();
    renderWithRouter(<StudentLogin />);
    
    const admissionNumberInput = screen.getByLabelText(/admission number/i);
    const passwordInput = screen.getByLabelText(/password/i);
    
    await user.type(admissionNumberInput, 'SA/2024/001');
    await user.type(passwordInput, 'password123');
    
    expect(admissionNumberInput).toHaveValue('SA/2024/001');
    expect(passwordInput).toHaveValue('password123');
  });

  it('toggles remember me checkbox', async () => {
    const user = userEvent.setup();
    renderWithRouter(<StudentLogin />);
    
    const rememberMeCheckbox = screen.getByLabelText(/remember me/i);
    
    expect(rememberMeCheckbox).not.toBeChecked();
    
    await user.click(rememberMeCheckbox);
    expect(rememberMeCheckbox).toBeChecked();
    
    await user.click(rememberMeCheckbox);
    expect(rememberMeCheckbox).not.toBeChecked();
  });

  it('submits form with valid credentials', async () => {
    const user = userEvent.setup();
    renderWithRouter(<StudentLogin />);
    
    const admissionNumberInput = screen.getByLabelText(/admission number/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /access my results/i });
    
    await user.type(admissionNumberInput, 'SA/2024/001');
    await user.type(passwordInput, 'password123');
    await user.click(submitButton);
    
    // Check if form submission is handled (button should show loading state)
    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });
  });

  it('shows loading state during form submission', async () => {
    const user = userEvent.setup();
    renderWithRouter(<StudentLogin />);
    
    const admissionNumberInput = screen.getByLabelText(/admission number/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /access my results/i });
    
    await user.type(admissionNumberInput, 'SA/2024/001');
    await user.type(passwordInput, 'password123');
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/signing in/i)).toBeInTheDocument();
    });
  });

  it('prevents form submission with empty fields', async () => {
    const user = userEvent.setup();
    renderWithRouter(<StudentLogin />);
    
    const submitButton = screen.getByRole('button', { name: /access my results/i });
    
    await user.click(submitButton);
    
    // Form should not submit with empty fields (HTML5 validation)
    expect(submitButton).not.toBeDisabled();
  });

  it('has proper form accessibility', () => {
    renderWithRouter(<StudentLogin />);
    
    const admissionNumberInput = screen.getByLabelText(/admission number/i);
    const passwordInput = screen.getByLabelText(/password/i);
    
    expect(admissionNumberInput).toHaveAttribute('type', 'text');
    expect(admissionNumberInput).toHaveAttribute('autoComplete', 'username');
    expect(admissionNumberInput).toBeRequired();
    
    expect(passwordInput).toHaveAttribute('type', 'password');
    expect(passwordInput).toHaveAttribute('autoComplete', 'current-password');
    expect(passwordInput).toBeRequired();
  });

  it('displays help text for students', () => {
    renderWithRouter(<StudentLogin />);
    
    expect(screen.getByText(/need help\? contact your school administrator/i)).toBeInTheDocument();
  });

  it('has correct navigation links', () => {
    renderWithRouter(<StudentLogin />);
    
    const schoolLoginLink = screen.getByRole('link', { name: /school login/i });
    expect(schoolLoginLink).toHaveAttribute('href', '/school/login');
    
    const superAdminLink = screen.getByRole('link', { name: /super admin/i });
    expect(superAdminLink).toHaveAttribute('href', '/super-admin/login');
  });

  it('has proper form structure and semantics', () => {
    renderWithRouter(<StudentLogin />);
    
    const form = screen.getByRole('form') || screen.getByTestId('login-form') || document.querySelector('form');
    expect(form).toBeInTheDocument();
    
    const submitButton = screen.getByRole('button', { name: /access my results/i });
    expect(submitButton).toHaveAttribute('type', 'submit');
  });
});
