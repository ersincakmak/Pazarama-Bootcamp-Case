import { render } from '@testing-library/react'
import React from 'react'
import ApplicationDetail from '..'
import { IApplication } from '../../../types/application'

const mockApplication: IApplication = {
  _id: '',
  address: '',
  age: 25,
  answers: [],
  applicationReason: '',
  files: [],
  firstName: '',
  lastName: '',
  status: 'waiting',
  tcNo: '',
}

describe('ApplicationDetail test', () => {
  it('should render correctly', () => {
    const { baseElement } = render(
      <ApplicationDetail application={mockApplication} />
    )
    expect(baseElement).toBeInTheDocument()
  })
})
