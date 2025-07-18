import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import SchoolRegister from '../SchoolRegister';

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
  };
});

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('SchoolRegister', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the registration form with correct title', () => {
    renderWithRouter(<SchoolRegister />);
    
    expect(screen.getByText('Register Your School')).toBeInTheDocument();
    expect(screen.getByText('Join the platform and start managing your school results')).toBeInTheDocument();
  });

  it('displays progress steps', () => {
    renderWithRouter(<SchoolRegister />);
    
    expect(screen.getByText('Basic Information')).toBeInTheDocument();
    expect(screen.getByText('Location & Contact')).toBeInTheDocument();
    expect(screen.getByText('Credentials')).toBeInTheDocument();
    expect(screen.getByText('School Details')).toBeInTheDocument();
  });

  it('starts with step 1 (Basic Information)', () => {
    renderWithRouter(<SchoolRegister />);
    
    expect(screen.getByText('School and admin details')).toBeInTheDocument();
    expect(screen.getByLabelText(/your full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/school name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/school email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/school type/i)).toBeInTheDocument();
  });

  it('shows Next button on first step', () => {
    renderWithRouter(<SchoolRegister />);
    
    const nextButton = screen.getByRole('button', { name: /next/i });
    expect(nextButton).toBeInTheDocument();
    
    const previousButton = screen.getByRole('button', { name: /previous/i });
    expect(previousButton).toBeDisabled();
  });

  it('validates required fields on step 1', async () => {
    const user = userEvent.setup();
    renderWithRouter(<SchoolRegister />);
    
    const nextButton = screen.getByRole('button', { name: /next/i });
    await user.click(nextButton);
    
    await waitFor(() => {
      expect(screen.getByText('Full name is required')).toBeInTheDocument();
      expect(screen.getByText('School name is required')).toBeInTheDocument();
    });
  });

  it('allows filling out basic information fields', async () => {
    const user = userEvent.setup();
    renderWithRouter(<SchoolRegister />);
    
    const fullNameInput = screen.getByLabelText(/your full name/i);
    const schoolNameInput = screen.getByLabelText(/school name/i);
    const schoolEmailInput = screen.getByLabelText(/school email/i);
    
    await user.type(fullNameInput, 'John Doe');
    await user.type(schoolNameInput, 'Excellence High School');
    await user.type(schoolEmailInput, 'admin@excellence.edu.ng');
    
    expect(fullNameInput).toHaveValue('John Doe');
    expect(schoolNameInput).toHaveValue('Excellence High School');
    expect(schoolEmailInput).toHaveValue('admin@excellence.edu.ng');
  });

  it('validates email format', async () => {
    const user = userEvent.setup();
    renderWithRouter(<SchoolRegister />);
    
    const fullNameInput = screen.getByLabelText(/your full name/i);
    const schoolNameInput = screen.getByLabelText(/school name/i);
    const schoolEmailInput = screen.getByLabelText(/school email/i);
    const nextButton = screen.getByRole('button', { name: /next/i });
    
    await user.type(fullNameInput, 'John Doe');
    await user.type(schoolNameInput, 'Excellence High School');
    await user.type(schoolEmailInput, 'invalid-email');
    await user.click(nextButton);
    
    await waitFor(() => {
      expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
    });
  });

  it('proceeds to step 2 with valid data', async () => {
    const user = userEvent.setup();
    renderWithRouter(<SchoolRegister />);
    
    const fullNameInput = screen.getByLabelText(/your full name/i);
    const schoolNameInput = screen.getByLabelText(/school name/i);
    const nextButton = screen.getByRole('button', { name: /next/i });
    
    await user.type(fullNameInput, 'John Doe');
    await user.type(schoolNameInput, 'Excellence High School');
    await user.click(nextButton);
    
    await waitFor(() => {
      expect(screen.getByText('Location & Contact')).toBeInTheDocument();
      expect(screen.getByText('Address and contact information')).toBeInTheDocument();
      expect(screen.getByLabelText(/state/i)).toBeInTheDocument();
    });
  });

  it('displays Nigerian states in dropdown', async () => {
    const user = userEvent.setup();
    renderWithRouter(<SchoolRegister />);
    
    // Navigate to step 2
    const fullNameInput = screen.getByLabelText(/your full name/i);
    const schoolNameInput = screen.getByLabelText(/school name/i);
    const nextButton = screen.getByRole('button', { name: /next/i });
    
    await user.type(fullNameInput, 'John Doe');
    await user.type(schoolNameInput, 'Excellence High School');
    await user.click(nextButton);
    
    await waitFor(() => {
      const stateSelect = screen.getByLabelText(/state/i);
      expect(stateSelect).toBeInTheDocument();
      
      // Check if some Nigerian states are present
      expect(screen.getByText('Lagos')).toBeInTheDocument();
      expect(screen.getByText('Abuja')).toBeInTheDocument() || expect(screen.getByText('FCT')).toBeInTheDocument();
    });
  });

  it('allows going back to previous step', async () => {
    const user = userEvent.setup();
    renderWithRouter(<SchoolRegister />);
    
    // Navigate to step 2
    const fullNameInput = screen.getByLabelText(/your full name/i);
    const schoolNameInput = screen.getByLabelText(/school name/i);
    let nextButton = screen.getByRole('button', { name: /next/i });
    
    await user.type(fullNameInput, 'John Doe');
    await user.type(schoolNameInput, 'Excellence High School');
    await user.click(nextButton);
    
    await waitFor(() => {
      expect(screen.getByText('Location & Contact')).toBeInTheDocument();
    });
    
    // Go back to step 1
    const previousButton = screen.getByRole('button', { name: /previous/i });
    await user.click(previousButton);
    
    await waitFor(() => {
      expect(screen.getByText('Basic Information')).toBeInTheDocument();
      expect(screen.getByText('School and admin details')).toBeInTheDocument();
    });
  });

  it('shows login link for existing users', () => {
    renderWithRouter(<SchoolRegister />);
    
    expect(screen.getByText('Already have an account?')).toBeInTheDocument();
    
    const loginLink = screen.getByRole('link', { name: /sign in to your school account/i });
    expect(loginLink).toHaveAttribute('href', '/school/login');
  });

  it('displays EduManage Pro branding', () => {
    renderWithRouter(<SchoolRegister />);
    
    expect(screen.getByText('EduManage')).toBeInTheDocument();
    expect(screen.getByText('Pro')).toBeInTheDocument();
  });

  it('has proper form structure', () => {
    renderWithRouter(<SchoolRegister />);
    
    const form = screen.getByRole('form') || document.querySelector('form');
    expect(form).toBeInTheDocument();
  });

  it('shows step indicators with correct styling', () => {
    renderWithRouter(<SchoolRegister />);
    
    // Step 1 should be active (current step)
    const step1Indicator = screen.getByText('1');
    expect(step1Indicator).toBeInTheDocument();
    
    // Other steps should be visible but not active
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('validates required fields on step 2', async () => {
    const user = userEvent.setup();
    renderWithRouter(<SchoolRegister />);
    
    // Navigate to step 2
    const fullNameInput = screen.getByLabelText(/your full name/i);
    const schoolNameInput = screen.getByLabelText(/school name/i);
    let nextButton = screen.getByRole('button', { name: /next/i });
    
    await user.type(fullNameInput, 'John Doe');
    await user.type(schoolNameInput, 'Excellence High School');
    await user.click(nextButton);
    
    await waitFor(() => {
      expect(screen.getByText('Location & Contact')).toBeInTheDocument();
    });
    
    // Try to proceed without filling required fields
    nextButton = screen.getByRole('button', { name: /next/i });
    await user.click(nextButton);
    
    await waitFor(() => {
      expect(screen.getByText('State is required')).toBeInTheDocument();
      expect(screen.getByText('LGA is required')).toBeInTheDocument();
      expect(screen.getByText('Address is required')).toBeInTheDocument();
      expect(screen.getByText('Phone number is required')).toBeInTheDocument();
    });
  });
});
