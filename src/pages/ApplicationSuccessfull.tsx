import React, { useEffect } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../redux/store'

type Props = {
  title: string
}

const Detail: React.FC<Props> = ({ title, children }) => (
  <div className="w-full flex flex-col items-start md:flex-row md:items-center gap-2">
    <p className="text-lg font-semibold">{title}:</p>
    <p>{children}</p>
  </div>
)

const ApplicationSuccessfull = () => {
  const { application } = useAppSelector((state) => state.application)
  const navigate = useNavigate()
  useEffect(() => {
    if (!application) {
      navigate('/basvuru-olustur')
    }
  }, [application])

  return (
    <div className="w-screen h-screen overflow-auto flex flex-col gap-2 p-3 bg-orange-100">
      <div className="max-w-xl w-full mx-auto flex flex-col gap-3">
        <div
          className="p-3 rounded-xl border-2 border-slate-300 bg-white flex items-center
           gap-3"
        >
          <div
            className="w-10 h-10 rounded-full bg-green-300 text-green-600 flex text-xl
            items-center justify-center shrink-0 self-start"
          >
            <AiOutlineCheck />
          </div>
          <div>
            <p>Your application has been completed successfully.</p>
            <p>
              Your application code :{' '}
              <span className="font-bold break-all">{application?._id}</span>
            </p>
            <p>
              You can check your application with above code on{' '}
              <Link to="/basvuru-sorgula" className="text-blue-500 underline">
                Application Inquiry
              </Link>{' '}
              page.
            </p>
          </div>
        </div>
        <div className="p-3 rounded-xl border-2 border-slate-300 bg-white flex flex-col gap-3">
          <p className="text-2xl font-bold text-center">Application Detail</p>
          <Detail title="Status">{application?.status}</Detail>
          <Detail title="First Name">{application?.firstName}</Detail>
          <Detail title="Last Name">{application?.lastName}</Detail>
          <Detail title="Age">{application?.age}</Detail>
          <Detail title="Tc No">{application?.tcNo}</Detail>
          <Detail title="Address">{application?.address}</Detail>
          <Detail title="Application Reason">
            {application?.applicationReason}
          </Detail>
        </div>
      </div>
    </div>
  )
}

export default ApplicationSuccessfull
