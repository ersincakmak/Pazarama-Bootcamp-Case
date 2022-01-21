import React from 'react'
import { useParams } from 'react-router-dom'

const Application = () => {
  const { id } = useParams()

  return (
    <div>
      <h1>Application {id} </h1>
    </div>
  )
}

export default Application
