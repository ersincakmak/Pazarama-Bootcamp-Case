import { render } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import AdminNav from '..'
import store from '../../../redux/store'

const renderElement = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AdminNav />
    </BrowserRouter>
  </Provider>
)

describe('AdminNav test', () => {
  it('should render correctly', async () => {
    const { baseElement } = render(renderElement())
    expect(baseElement).toBeInTheDocument()
  })
})
