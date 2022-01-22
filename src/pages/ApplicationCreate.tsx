import { FormikProvider, useFormik } from 'formik'
import React, { useState } from 'react'
import { DropEvent, FileRejection } from 'react-dropzone'
import { useNavigate } from 'react-router-dom'
import DropZone from '../components/DropZone'
import ImagePreview from '../components/ImagePreview'
import Spinner from '../components/Spinner'
import TextField from '../components/TextField'
import { createApplication } from '../redux/slices/applicationSlice'
import { useAppDispatch } from '../redux/store'
import { ICreateApplicationPayload } from '../types/application'
import createApplicationSchema from '../validations/Application'

type Props = {
  className?: string
}

const FieldWrapper: React.FC<Props> = ({ children, className }) => (
  <div
    className={`p-3 bg-white rounded-xl border-2 border-slate-300 shadow-md ${className}`}
  >
    {children}
  </div>
)

FieldWrapper.defaultProps = {
  className: '',
}

const ApplicationCreate = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const formik = useFormik<ICreateApplicationPayload>({
    initialValues: {
      firstName: '',
      lastName: '',
      age: Number(undefined),
      tcNo: '',
      address: '',
      applicationReason: '',
      files: [],
    },
    validationSchema: createApplicationSchema,
    onSubmit: async (values) => {
      const formData = new FormData()
      const { files, ...rest } = values
      files.forEach((file) => {
        formData.append('files', file, file.name)
      })
      Object.entries(rest).forEach((item) => {
        formData.append(item[0], item[1])
      })
      setLoading(true)
      const { meta } = await dispatch(createApplication(formData))
      if (meta.requestStatus === 'fulfilled') {
        navigate('/basvuru-basarili')
      }
      setLoading(false)
    },
  })

  const onDrop: (
    acceptedFiles: File[],
    fileRejections: FileRejection[],
    event: DropEvent
  ) => void = (acceptedFiles: File[]) => {
    formik.setFieldValue('files', acceptedFiles)
  }

  return (
    <div className="w-screen h-screen overflow-auto flex flex-col gap-2 p-3 bg-orange-100">
      <FormikProvider value={formik}>
        <h1 className="text-3xl text-center">Create an Application</h1>
        <form
          onSubmit={formik.handleSubmit}
          className="w-full max-w-xl  flex flex-col gap-3 mx-auto my-3 h-max"
        >
          <FieldWrapper>
            <TextField name="firstName" label="First Name" placeholder="John" />
          </FieldWrapper>
          <FieldWrapper>
            <TextField name="lastName" label="Last Name" placeholder="Doe" />
          </FieldWrapper>
          <FieldWrapper>
            <TextField name="age" label="Age" placeholder="22" type="number" />
          </FieldWrapper>
          <FieldWrapper>
            <TextField
              name="tcNo"
              label="Tc No"
              placeholder="Your Tc Identification number"
            />
          </FieldWrapper>
          <FieldWrapper>
            <TextField
              name="address"
              label="Address"
              placeholder="Your Address"
              type="textarea"
            />
          </FieldWrapper>
          <FieldWrapper>
            <TextField
              name="applicationReason"
              label="Application Reason"
              placeholder="Reason of your application"
              type="textarea"
            />
          </FieldWrapper>
          <FieldWrapper className="flex flex-col gap-3">
            <p>File(s)</p>
            <DropZone onDrop={onDrop} />
          </FieldWrapper>
          {formik.values.files.length > 0 && (
            <FieldWrapper className="flex flex-col gap-3">
              <p>File(s) Preview</p>
              {formik.values.files.map((item) => (
                // @ts-ignore
                <ImagePreview file={item} key={`files_${item.name}`} />
              ))}
            </FieldWrapper>
          )}
          <button
            type="submit"
            className="w-max px-3.5 py-1.5 font-semibold transition cursor-pointer bg-teal-500
            rounded hover:bg-teal-600 text-white outline-none focus:ring-4 focus:ring-teal-300
            disabled:cursor-not-allowed min-w-[6rem] flex justify-center items-center"
            disabled={loading}
          >
            {loading ? <Spinner size="sm" /> : 'Create'}
          </button>
        </form>
      </FormikProvider>
    </div>
  )
}

export default ApplicationCreate
