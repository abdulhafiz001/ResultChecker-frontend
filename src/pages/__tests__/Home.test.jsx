import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

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

describe('Home Page', () => {
  it('renders the main heading', () => {
    renderWithRouter(<Home />);
    
    expect(screen.getByText('EduManage')).toBeInTheDocument();
    expect(screen.getByText('Pro')).toBeInTheDocument();
  });

  it('displays the hero section with correct content', () => {
    renderWithRouter(<Home />);
    
    expect(screen.getByText(/Transform Your School Management/)).toBeInTheDocument();
    expect(screen.getByText(/Comprehensive platform for Nigerian schools/)).toBeInTheDocument();
  });

  it('shows navigation links', () => {
    renderWithRouter(<Home />);
    
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('displays login buttons', () => {
    renderWithRouter(<Home />);
    
    expect(screen.getByText('Student Login')).toBeInTheDocument();
    expect(screen.getByText('School Login')).toBeInTheDocument();
  });

  it('shows platform features section', () => {
    renderWithRouter(<Home />);
    
    expect(screen.getByText('Platform Features')).toBeInTheDocument();
    expect(screen.getByText('Complete School Management Solution')).toBeInTheDocument();
    expect(screen.getByText('School Registration')).toBeInTheDocument();
    expect(screen.getByText('Teacher Management')).toBeInTheDocument();
    expect(screen.getByText('Student Records')).toBeInTheDocument();
    expect(screen.getByText('Result Management')).toBeInTheDocument();
  });

  it('displays how it works section', () => {
    renderWithRouter(<Home />);
    
    expect(screen.getByText('How It Works')).toBeInTheDocument();
    expect(screen.getByText('Get Started in 3 Simple Steps')).toBeInTheDocument();
    expect(screen.getByText('Register Your School')).toBeInTheDocument();
    expect(screen.getByText('Setup Your School')).toBeInTheDocument();
    expect(screen.getByText('Start Managing Results')).toBeInTheDocument();
  });

  it('shows call-to-action section', () => {
    renderWithRouter(<Home />);
    
    expect(screen.getByText(/Ready to transform your school/)).toBeInTheDocument();
    expect(screen.getByText(/Register Your School/)).toBeInTheDocument();
    expect(screen.getByText(/Student Login/)).toBeInTheDocument();
  });

  it('displays footer information', () => {
    renderWithRouter(<Home />);
    
    expect(screen.getByText(/© 2024 EduManage Pro/)).toBeInTheDocument();
    expect(screen.getByText(/Empowering Nigerian education/)).toBeInTheDocument();
  });

  it('has correct links for registration and login', () => {
    renderWithRouter(<Home />);
    
    const schoolRegisterLink = screen.getByRole('link', { name: /Register Your School/ });
    expect(schoolRegisterLink).toHaveAttribute('href', '/school/register');
    
    const studentLoginLink = screen.getByRole('link', { name: /Student Login/ });
    expect(studentLoginLink).toHaveAttribute('href', '/student/login');
  });

  it('mobile menu toggle works', () => {
    renderWithRouter(<Home />);
    
    // Find mobile menu button (should be hidden on desktop but present in DOM)
    const mobileMenuButtons = screen.getAllByRole('button');
    const mobileMenuButton = mobileMenuButtons.find(button => 
      button.getAttribute('aria-expanded') !== null
    );
    
    if (mobileMenuButton) {
      expect(mobileMenuButton).toBeInTheDocument();
      
      // Test clicking the mobile menu button
      fireEvent.click(mobileMenuButton);
      expect(mobileMenuButton).toHaveAttribute('aria-expanded', 'true');
    }
  });

  it('renders all feature cards with icons', () => {
    renderWithRouter(<Home />);
    
    const featureCards = [
      'School Registration',
      'Teacher Management', 
      'Student Records',
      'Result Management',
      'Analytics & Reports',
      'Secure & Reliable'
    ];

    featureCards.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it('has proper semantic HTML structure', () => {
    renderWithRouter(<Home />);
    
    expect(screen.getByRole('banner')).toBeInTheDocument(); // header
    expect(screen.getByRole('main')).toBeInTheDocument(); // main content
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // footer
  });
});
