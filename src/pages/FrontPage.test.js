import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Front page table', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/News Details/i);
  expect(linkElement).toBeInTheDocument();
});
