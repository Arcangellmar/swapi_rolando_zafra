import React from 'react';
import { render, screen } from '@testing-library/react';
import NoticeHeader from './notice_header';

test('notice header', () => {
  render(<NoticeHeader />);
  const linkElement = screen.getByText("Failed To Load Data");
  expect(linkElement).toBeInTheDocument();
});
