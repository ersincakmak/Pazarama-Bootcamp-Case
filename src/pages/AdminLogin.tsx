import { FormikProvider, useFormik } from 'formik'
import React from 'react'
import FieldWrapper from '../components/FieldWrapper'
import TextField from '../components/TextField'

const AdminLogin = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => console.log(values),
  })

  return (
    <div className="bg-orange-100 w-screen h-screen overflow-auto flex flex-col p-3">
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit} className="max-w-xl w-full m-auto">
          <FieldWrapper className="flex flex-col gap-3">
            <h1 className="text-center font-semibold text-3xl">Admin Login</h1>
            <TextField
              label="Username"
              name="username"
              placeholder="Your username"
            />
            <TextField
              type="password"
              label="Password"
              name="password"
              placeholder="Your password"
            />
            <button
              type="submit"
              className="w-max px-3 py-1 outline-none bg-green-400 focus:ring-4 focus:ring-green-300 rounded-md"
            >
              Login
            </button>
          </FieldWrapper>
        </form>
      </FormikProvider>
    </div>
  )
}

export default AdminLogin
