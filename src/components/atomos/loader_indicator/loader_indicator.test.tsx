import React from 'react';
import { render, screen } from '@testing-library/react';
import LoaderIndicator from './loader_indicator';

test('loader indicator', () => {
  render(<LoaderIndicator />);
  const linkElement = screen.getByText("Loading");
  expect(linkElement).toBeInTheDocument();
});
