import * as yup from 'yup'

const createApplicationSchema = yup.object().shape({
  firstName: yup.string().required().label('First Name'),
  lastName: yup.string().required().label('Last Name'),
  age: yup.number().required().label('Age'),
  applicationReason: yup.string().required().label('Application Reason'),
  tcNo: yup
    .string()
    .required()
    .matches(/^[1-9]{1}[0-9]{9}[02468]{1}$/, 'Invalid Tc No')
    .label('Tc No'),
  address: yup.string().required().label('Address'),
})

export default createApplicationSchema
