import { render, screen } from '@testing-library/react';
import App from './App';

test('loads wedding invitation page in iframe', () => {
  render(<App />);
  const frame = screen.getByTitle(/Alex & Diane/i);
  expect(frame).toBeInTheDocument();
  expect(frame).toHaveAttribute('src', expect.stringContaining('page1.html'));
});
