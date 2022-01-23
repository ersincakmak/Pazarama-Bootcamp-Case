import React from 'react'
import { IApplication } from '../../types/application'
import FieldDisplay from '../FieldDisplay'

type Props = {
  application: IApplication
}

const ApplicationDetail: React.FC<Props> = ({ application }) => (
  <div className="p-3 rounded-xl border-2 border-slate-300 bg-white flex flex-col gap-3">
    <p className="text-2xl font-bold text-center">Application Detail</p>
    <FieldDisplay title="Status">{application.status}</FieldDisplay>
    <FieldDisplay title="First Name">{application.firstName}</FieldDisplay>
    <FieldDisplay title="Last Name">{application.lastName}</FieldDisplay>
    <FieldDisplay title="Age">{application.age}</FieldDisplay>
    <FieldDisplay title="Tc No">{application.tcNo}</FieldDisplay>
    <FieldDisplay title="Address">{application.address}</FieldDisplay>
    <FieldDisplay title="Application Reason">
      {application.applicationReason}
    </FieldDisplay>
  </div>
)

export default ApplicationDetail
