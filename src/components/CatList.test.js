import React from 'react';
import { render } from '@testing-library/react';
import CatList from './CatList';
import { catfacts5 } from '../test-data/testdata';

describe('<CatList />', () => {
  test('renders the cat list', () => {
    const c = render(<CatList facts={catfacts5} />);
    expect(c.getAllByTestId('cat-item').length).toBe(5);
    const links = c.getAllByTestId('cat-link');
    expect(links[0]).toHaveAttribute('href', 'https://cat-fact.herokuapp.com/facts/1');
  });
});
