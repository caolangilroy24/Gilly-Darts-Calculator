import React from 'react';
import { render, screen } from '@testing-library/react';
import NumberTile from '../NumberTile';

test('renders learn react link', () => {
  render(<NumberTile num={20} onTileClick={function (num: number): void {
      throw new Error('Function not implemented.');
  } } onX2Click={function (num: number): void {
      throw new Error('Function not implemented.');
  } } onX3Click={function (num: number): void {
      throw new Error('Function not implemented.');
  } } />);
//   const linkElement = screen.getByText(/learn react/i);
  const element = screen.getByText(/20/i)
  expect(element).toBeInTheDocument();
});
