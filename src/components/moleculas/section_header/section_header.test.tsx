import React from 'react';
import { render, screen } from '@testing-library/react';
import SectionHeader from './section_header';

test('section header', () => {
  render(<SectionHeader title='Pruebas'/>);
  const linkElement = screen.getByText("Pruebas");
  expect(linkElement).toBeInTheDocument();
});
