import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
import { ErrorMessage, Field, FormikProvider, useFormik } from 'formik'
import AdminNav from '../components/AdminNav'
import ApplicationDetail from '../components/ApplicationDetail'
import api from '../constants/axios'
import { IApplication, IStatus } from '../types/application'
import Spinner from '../components/Spinner'
import { createAnswerSchema } from '../validations/Application'

const AdminApplication = () => {
  const [loading, setLoading] = useState(false)
  const [statusLoading, setStatusLoading] = useState(false)
  const [answerLoading, setAnswerLoading] = useState(false)
  const [status, setStatus] = useState<IStatus>('waiting')
  const [application, setApplication] = useState<IApplication | null>(null)

  const { id } = useParams()

  const fetchApplication = async () => {
    setLoading(true)
    try {
      const { data } = await api.request({
        method: 'GET',
        url: `application/${id}`,
      })
      setApplication(data.data as IApplication)
      setStatus(data.data.status as IStatus)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  const updateApplicationStatus = async () => {
    setStatusLoading(true)
    try {
      const { data } = await api.request({
        method: 'PATCH',
        url: `admin/application/update-status/${id}`,
        data: {
          status,
        },
      })
      setApplication(data.data as IApplication)
      setStatus(data.data.status as IStatus)
      setStatusLoading(false)
    } catch (error) {
      setStatusLoading(false)
    }
  }

  const createAnswer = async (message: string) => {
    setAnswerLoading(true)
    try {
      const { data } = await api.request({
        method: 'POST',
        url: `admin/application/create-answer/${id}`,
        data: {
          message,
        },
      })
      setApplication(data.data as IApplication)
      setStatus(data.data.status as IStatus)
      setAnswerLoading(false)
    } catch (error) {
      setAnswerLoading(false)
    }
  }

  const formik = useFormik({
    initialValues: {
      answer: '',
    },
    validationSchema: createAnswerSchema,
    onSubmit: async (values, helpers) => {
      await createAnswer(values.answer)
      helpers.resetForm()
    },
  })

  useEffect(() => {
    fetchApplication()
  }, [])

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-slate-700">
        <Spinner size="xl" />
      </div>
    )
  }

  if (!application) {
    return <div>Not Found</div>
  }

  return (
    <div className="w-screen h-screen flex flex-col gap-3 bg-orange-100 overflow-auto pb-3">
      <AdminNav />
      <div className="max-w-xl w-full flex flex-col gap-2 mx-auto px-2">
        <h1 className="text-2xl font-bold mb-4 ">
          Application / <span className="break-words">{application._id}</span>
        </h1>
        <div className="flex gap-2 justify-end items-center">
          <div className="relative w-max">
            <div className="absolute right-0 top-0 z-10 transform -translate-x-1/2 translate-y-1/2 pointer-events-none">
              <IoIosArrowDown />
            </div>
            <select
              className="w-32 px-2 py-1 appearance-none rounded cursor-pointer relative outline-none"
              value={status}
              onChange={(e) => setStatus(e.target.value as IStatus)}
            >
              <option value="solved">solved</option>
              <option value="waiting">waiting</option>
              <option value="rejected">rejected</option>
            </select>
          </div>
          <button
            type="button"
            className="px-2 py-1 bg-blue-400 hover:bg-blue-500 focus:ring-4 text-white
            focus:ring-blue-300 rounded shadow-sm min-w-[8rem] transition flex items-center
            justify-center"
            onClick={updateApplicationStatus}
            disabled={statusLoading}
          >
            {statusLoading ? <Spinner size="sm" /> : 'Update Status'}
          </button>
        </div>
        <ApplicationDetail application={application} />
        <FormikProvider value={formik}>
          <form
            onSubmit={formik.handleSubmit}
            className="flex gap-2 items-center relative"
          >
            <Field
              name="answer"
              type="text"
              placeholder="Answer here..."
              className="rounded-lg p-2 border-2 border-slate-300 focus:border-slate-500 outline-none flex-1"
            />
            <ErrorMessage
              name="answer"
              render={(errorMessage) => (
                <span className="absolute bottom-0 left-1 transform translate-y-full text-sm text-red-500">
                  {errorMessage}
                </span>
              )}
            />
            <button
              type="submit"
              disabled={answerLoading}
              className="px-3.5 py-2 bg-green-400 hover:bg-green-500 focus:ring-4 text-white
            focus:ring-green-300 rounded shadow-sm transition flex items-center
              justify-center min-w-[8rem]"
            >
              {answerLoading ? <Spinner size="sm" /> : 'Create Answer'}
            </button>
          </form>
        </FormikProvider>
      </div>
    </div>
  )
}

export default AdminApplication
