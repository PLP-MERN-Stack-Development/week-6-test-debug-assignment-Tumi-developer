
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MERN Bug Tracker heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/MERN Bug Tracker/i);
  expect(headingElement).toBeInTheDocument();
});