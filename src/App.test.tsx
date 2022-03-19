import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders checklist', () => {
  render(<App />);
  const linkElement = screen.getByText(/my checklist/i);
  expect(linkElement).toBeInTheDocument();
});
