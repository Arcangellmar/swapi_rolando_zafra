import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('app', () => {
  render(<App />);
  // const linkElement = screen.getByText("People of Star Wars");
  // expect(linkElement).toBeInTheDocument();
});
