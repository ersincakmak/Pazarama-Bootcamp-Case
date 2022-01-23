import { render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ApplicationRow from '..'
import { IApplication } from '../../../types/application'

const mockApplication: IApplication = {
  _id: '',
  address: '',
  age: 0,
  answers: [],
  applicationReason: '',
  createdAt: '',
  files: [],
  firstName: '',
  lastName: '',
  status: 'waiting',
  tcNo: '',
  updatedAt: '',
}

describe('Dropzone Test', () => {
  it('should render Dropzone component', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <ApplicationRow application={mockApplication} />
      </BrowserRouter>
    )
    expect(baseElement).toBeInTheDocument()
  })
})
