import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CatButton from './CatButton'

describe('<CatButton />', () => {
  test('renders the cat button with the cat image', () => {
    const fetch5catsMock = jest.fn();
    const c = render(
      <CatButton fetch5cats={fetch5catsMock} />
    )
    expect(c.container).toHaveTextContent('Meeoowwrre cat facts')
    expect(c.getByTestId('smallcat')).toBeDefined()

    fireEvent.click(c.getByTestId('catbutton'))
    expect(fetch5catsMock).toHaveBeenCalled()
  })
})