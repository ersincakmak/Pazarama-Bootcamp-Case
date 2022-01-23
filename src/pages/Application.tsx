import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ApplicationDetail from '../components/ApplicationDetail'
import Spinner from '../components/Spinner'
import api from '../constants/axios'
import { IApplication } from '../types/application'

const Application = () => {
  const { id } = useParams()
  const [application, setApplication] = useState<IApplication | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchApplication = async () => {
    setLoading(true)
    try {
      const { data } = await api.request({
        method: 'GET',
        url: `application/${id}`,
      })
      setApplication(data.data as IApplication)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchApplication()
  }, [])

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-orange-100">
        <Spinner size="xl" />
      </div>
    )
  }

  if (!application) {
    return (
      <div className="w-screen h-screen flex items-center justify-center p-3 bg-orange-100">
        <div className="max-w-xl w-full flex flex-col gap-3 items-center">
          <p className="text-3xl">404 Not Found</p>
          <p className="text-center">
            For another application inquiry go to{' '}
            <Link to="/basvuru-sorgula" className="text-blue-400 underline">
              Application Inquiry Page
            </Link>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-screen h-screen overflow-auto flex flex-col gap-2 p-3 bg-orange-100">
      <div className="max-w-xl w-full flex flex-col gap-3 mx-auto">
        <ApplicationDetail application={application} />
      </div>
    </div>
  )
}

export default Application
