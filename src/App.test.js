import React from 'react'
import { render, act, waitFor, fireEvent } from '@testing-library/react'
import App from './App'
import { catfacts5 } from './test-data/testdata'

import * as axios from 'axios'
jest.mock('axios')

describe('<App />', () => {
  test('renders the cat facts when successful request', async () => {
    let c
    const data = { data: catfacts5 }
    axios.get.mockImplementation(() => Promise.resolve(data))

    act(() => {
      c = render(<App />)
    })
    await waitFor(() => {
      expect(c.getAllByTestId('cat-link').length).toBe(5)
      expect(axios.get).toHaveBeenCalledTimes(1)
    })

    act(() => {
      fireEvent.click(c.getByTestId('catbutton'))
    })
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(2)
    })
  })

  test('testing rejected request', async () => {
    let c
    axios.get.mockImplementation(() => Promise.reject(new Error('Async error')))

    act(() => {
      c = render(<App />)
    })
    await waitFor(() => {
      expect(c.container.querySelector('error-msg')).toBeDefined()
      expect(c.queryByTestId('cat-link')).toBeNull()
      expect(axios.get).toHaveBeenCalledTimes(1)
    })
  })
})
