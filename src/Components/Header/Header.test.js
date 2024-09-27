// Header.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header Component', () => {
  it('should render the header with logo and navigation links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Check if the logo is rendered
    const logo = screen.getByAltText(/CY Cafe/i);
    expect(logo).toBeInTheDocument();

    // Check if the navigation links are present
    const homeLink = screen.getByText(/Home/i);
    const aboutLink = screen.getByText(/About/i);
    const menuLink = screen.getByText(/Menu/i);
    const contactLink = screen.getByText(/Contact/i);

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(menuLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  it('should toggle mobile menu on click', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Check initial state (menu is closed)
    const toggleButton = screen.getByRole('button', { name: /menu toggle/i });
    expect(toggleButton.classList.contains('bi-list')).toBe(true);

    // Simulate click to open the menu
    fireEvent.click(toggleButton);
    expect(toggleButton.classList.contains('bi-x')).toBe(true);
    expect(document.body.classList.contains('mobile-nav-active')).toBe(true);

    // Simulate click to close the menu
    fireEvent.click(toggleButton);
    expect(toggleButton.classList.contains('bi-list')).toBe(true);
    expect(document.body.classList.contains('mobile-nav-active')).toBe(false);
  });

  it('should close the mobile menu when a navigation link is clicked', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Open the menu first
    const toggleButton = screen.getByRole('button', { name: /menu toggle/i });
    fireEvent.click(toggleButton);
    expect(document.body.classList.contains('mobile-nav-active')).toBe(true);

    // Simulate clicking a nav link
    const homeLink = screen.getByText(/Home/i);
    fireEvent.click(homeLink);

    // Menu should now be closed
    expect(document.body.classList.contains('mobile-nav-active')).toBe(false);
    expect(toggleButton.classList.contains('bi-list')).toBe(true);
  });
});
