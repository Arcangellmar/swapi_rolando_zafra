import React from 'react';
import { render, screen } from '@testing-library/react';
import PersonaBuscador from './persona_buscador';

test('persona buscador', () => {
  render(<PersonaBuscador peoples={[]} onclickCharacter={() => {}} next={() => {}} hasMore={false}/>);
//   const linkElement = screen.getByText("");
//   expect(linkElement).toBeInTheDocument();
});
