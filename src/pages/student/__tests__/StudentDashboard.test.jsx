import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import StudentDashboard from '../StudentDashboard';

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

describe('StudentDashboard', () => {
  it('renders welcome message with student name', () => {
    renderWithRouter(<StudentDashboard />);
    
    expect(screen.getByText(/welcome back, adebayo sarah/i)).toBeInTheDocument();
  });

  it('displays student information', () => {
    renderWithRouter(<StudentDashboard />);
    
    expect(screen.getByText('JSS 3A')).toBeInTheDocument();
    expect(screen.getByText('NA/2024/001')).toBeInTheDocument();
    expect(screen.getByText('2023/2024 (Second Term)')).toBeInTheDocument();
    expect(screen.getByText('Form Teacher: Mrs. Johnson')).toBeInTheDocument();
  });

  it('shows next class information', () => {
    renderWithRouter(<StudentDashboard />);
    
    expect(screen.getByText('Next Class')).toBeInTheDocument();
    expect(screen.getByText('Mathematics - 10:00 AM')).toBeInTheDocument();
  });

  it('displays quick stats cards', () => {
    renderWithRouter(<StudentDashboard />);
    
    expect(screen.getByText('Total Subjects')).toBeInTheDocument();
    expect(screen.getByText('Current Average')).toBeInTheDocument();
    expect(screen.getByText('Class Position')).toBeInTheDocument();
    expect(screen.getByText('Attendance Rate')).toBeInTheDocument();
  });

  it('shows quick action buttons', () => {
    renderWithRouter(<StudentDashboard />);
    
    expect(screen.getByText('Quick Actions')).toBeInTheDocument();
    expect(screen.getByText('View Results')).toBeInTheDocument();
    expect(screen.getByText('My Profile')).toBeInTheDocument();
    expect(screen.getByText('Attendance')).toBeInTheDocument();
    expect(screen.getByText('Timetable')).toBeInTheDocument();
  });

  it('displays academic progress overview', () => {
    renderWithRouter(<StudentDashboard />);
    
    expect(screen.getByText('Academic Progress Overview')).toBeInTheDocument();
    expect(screen.getByText('Mathematics')).toBeInTheDocument();
    expect(screen.getByText('English Language')).toBeInTheDocument();
    expect(screen.getByText('Basic Science')).toBeInTheDocument();
    expect(screen.getByText('Social Studies')).toBeInTheDocument();
  });

  it('shows recent results section', () => {
    renderWithRouter(<StudentDashboard />);
    
    expect(screen.getByText('Recent Results')).toBeInTheDocument();
    expect(screen.getByText('Second Term 2023/2024')).toBeInTheDocument();
  });

  it('displays upcoming events', () => {
    renderWithRouter(<StudentDashboard />);
    
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument();
    expect(screen.getByText('Mid-term Examination')).toBeInTheDocument();
    expect(screen.getByText('Parent-Teacher Conference')).toBeInTheDocument();
    expect(screen.getByText('Science Fair')).toBeInTheDocument();
    expect(screen.getByText('Sports Day')).toBeInTheDocument();
  });

  it('has correct navigation links in quick actions', () => {
    renderWithRouter(<StudentDashboard />);
    
    const viewResultsLink = screen.getByRole('link', { name: /view results/i });
    expect(viewResultsLink).toHaveAttribute('href', '/student/results');
    
    const profileLink = screen.getByRole('link', { name: /my profile/i });
    expect(profileLink).toHaveAttribute('href', '/student/profile');
    
    const attendanceLink = screen.getByRole('link', { name: /attendance/i });
    expect(attendanceLink).toHaveAttribute('href', '/student/attendance');
    
    const timetableLink = screen.getByRole('link', { name: /timetable/i });
    expect(timetableLink).toHaveAttribute('href', '/student/timetable');
  });

  it('shows view all results button', () => {
    renderWithRouter(<StudentDashboard />);
    
    const viewAllResultsLink = screen.getByRole('link', { name: /view all results/i });
    expect(viewAllResultsLink).toHaveAttribute('href', '/student/results');
  });

  it('shows view all events button', () => {
    renderWithRouter(<StudentDashboard />);
    
    const viewAllEventsLink = screen.getByRole('link', { name: /view all events/i });
    expect(viewAllEventsLink).toHaveAttribute('href', '/student/events');
  });

  it('displays grade badges with correct styling', () => {
    renderWithRouter(<StudentDashboard />);
    
    // Check for grade badges in progress overview
    const gradeBadges = screen.getAllByText(/^[A-F][+]?$/);
    expect(gradeBadges.length).toBeGreaterThan(0);
  });

  it('shows trend indicators for academic progress', () => {
    renderWithRouter(<StudentDashboard />);
    
    // Check for improvement percentages
    expect(screen.getByText('+5%')).toBeInTheDocument();
    expect(screen.getByText('+3%')).toBeInTheDocument();
    expect(screen.getByText('0%')).toBeInTheDocument();
    expect(screen.getByText('-2%')).toBeInTheDocument();
  });

  it('displays event descriptions and types', () => {
    renderWithRouter(<StudentDashboard />);
    
    expect(screen.getByText('Mathematics, English, Basic Science')).toBeInTheDocument();
    expect(screen.getByText('Discuss academic progress')).toBeInTheDocument();
    expect(screen.getByText('Present your science projects')).toBeInTheDocument();
    expect(screen.getByText('Inter-house sports competition')).toBeInTheDocument();
  });

  it('shows event type badges', () => {
    renderWithRouter(<StudentDashboard />);
    
    expect(screen.getByText('exam')).toBeInTheDocument();
    expect(screen.getByText('meeting')).toBeInTheDocument();
    expect(screen.getAllByText('event')).toHaveLength(2); // Science Fair and Sports Day
  });

  it('displays student avatar with initials', () => {
    renderWithRouter(<StudentDashboard />);
    
    // Check for student initials in avatar
    expect(screen.getByText('AS')).toBeInTheDocument(); // Adebayo Sarah
  });

  it('has proper semantic structure', () => {
    renderWithRouter(<StudentDashboard />);
    
    // Check for main content areas
    expect(screen.getByText('Welcome back, Adebayo Sarah!')).toBeInTheDocument();
    expect(screen.getByText('Quick Actions')).toBeInTheDocument();
    expect(screen.getByText('Academic Progress Overview')).toBeInTheDocument();
    expect(screen.getByText('Recent Results')).toBeInTheDocument();
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument();
  });
});
