import React from 'react';
import { render } from '@testing-library/react';
import CatSpinner from './CatSpinner';

describe('<CatSpinner />', () => {
  test('renders the cat spinner with the cat image', () => {
    const c = render(<CatSpinner />);
    expect(c.container.querySelector('cat-spinner')).toBeDefined();
    expect(c.getByTestId('bigcat')).toBeDefined();
  });
});
