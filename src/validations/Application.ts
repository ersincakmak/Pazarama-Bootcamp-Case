import * as yup from 'yup'

const createApplicationSchema = yup.object().shape({
  firstName: yup.string().required().min(3).label('First Name'),
  lastName: yup.string().required().min(3).label('Last Name'),
  age: yup.number().required().positive().label('Age'),
  applicationReason: yup
    .string()
    .min(10)
    .required()
    .label('Application Reason'),
  tcNo: yup
    .string()
    .required()
    .matches(/^[1-9]{1}[0-9]{9}[02468]{1}$/, 'Invalid Tc No')
    .label('Tc No'),
  address: yup.string().required().min(5).label('Address'),
})

export default createApplicationSchema
