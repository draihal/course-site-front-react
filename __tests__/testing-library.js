// import React from 'react'
// import { render } from '@testing-library/react'
// import Index from '../pages/index'
//
// test('renders deploy link', () => {
//   const { getByText } = render(<Index />)
//   const linkElement = getByText(
//     /Отзывы/
//   )
//   expect(linkElement).toBeInTheDocument()
// }

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

