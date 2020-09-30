import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders headline', () => {
  const { getByText } = render(<App />);
  const headline = getByText(/Bummelfeed/i);
  expect(headline).toBeInTheDocument();
});
