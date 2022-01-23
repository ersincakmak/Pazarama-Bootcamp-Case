import { render } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import AdminApplication from '..'
import store from '../../../redux/store'

describe('AdminApplication Page Test', () => {
  it('should render correctly', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <BrowserRouter>
          <AdminApplication />
        </BrowserRouter>
      </Provider>
    )

    expect(baseElement).toBeInTheDocument()
  })
})
