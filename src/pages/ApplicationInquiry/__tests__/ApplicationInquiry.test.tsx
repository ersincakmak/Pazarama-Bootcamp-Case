import { render } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import ApplicationInquiry from '..'
import store from '../../../redux/store'

describe('ApplicationInquiry Page Test', () => {
  it('should render correctly', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ApplicationInquiry />
        </BrowserRouter>
      </Provider>
    )

    expect(baseElement).toBeInTheDocument()
  })
})
