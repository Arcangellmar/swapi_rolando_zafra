import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './header';

test('header', () => {
  render(<Header titulo='Pruebas' nombrePersonajeSelecionado="" onBackButton={() => {}} clearNamePeopleSelected={() => {}}/>);
  const linkElement = screen.getByText("Pruebas");
  expect(linkElement).toBeInTheDocument();
});
