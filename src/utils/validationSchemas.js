import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(1, 'Password is required')
    .required('Password is required'),
  remember: Yup.boolean()
})

export const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  promotions: Yup.boolean()
}) 