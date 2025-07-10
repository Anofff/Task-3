import { Formik, Form, Field } from "formik"
import FormInput from "../forms/FormInput"
import Checkbox from "../forms/Checkbox"
import { loginSchema } from "../../utils/validationSchemas"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function LoginForm() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const initialValues = {
    email: "",
    password: "",
    remember: false,
  }

  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    try {
      await login(values.email, values.password)
      navigate("/dashboard")
    } catch (error) {
      console.error("Login error", error)
      setStatus(error.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, isSubmitting, handleChange, handleBlur, status }) => (
        <Form className="space-y-6">
          <FormInput
            label="Email address"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="example@mail.com"
            showValidation={true}
            isValid={!errors.email && touched.email}
            error={errors.email && touched.email ? errors.email : null}
            required
          />

          <FormInput
            label="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your password"
            hasPasswordToggle={true}
            showValidation={true}
            isValid={!errors.password && touched.password}
            error={errors.password && touched.password ? errors.password : null}
            required
          />

          <Checkbox
            id="remember"
            name="remember"
            checked={values.remember}
            onChange={handleChange}
            label="Remember me"
            color="indigo"
          />

          {status && <div className="text-sm text-red-500 text-center">{status}</div>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? "Logging in..." : "Login to Dashboard"}
          </button>

          <div className="text-center">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot your password?
            </a>
          </div>
        </Form>
      )}
    </Formik>
  )
}
