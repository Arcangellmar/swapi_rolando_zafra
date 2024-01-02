import React from 'react';
import { render, screen } from '@testing-library/react';
import LoaderSpinner from './loader_spinner';

test('loader spinner', () => {
  render(<LoaderSpinner />);
  const linkElement = screen.getByText("Loading");
  expect(linkElement).toBeInTheDocument();
});
