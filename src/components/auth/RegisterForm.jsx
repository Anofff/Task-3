import { Formik, Form } from "formik"
import FormInput from "../forms/FormInput"
import Checkbox from "../forms/Checkbox"
import { registerSchema } from "../../utils/validationSchemas"
import { useAuth } from "../../context/AuthContext"

export default function RegisterForm({ onSuccess }) {
  const { register } = useAuth()
  const initialValues = {
    email: "",
    password: "",
    promotions: false,
  }

  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    try {
      await register(values.email, values.password)
      if (onSuccess) onSuccess()
    } catch (error) {
      console.error("Registration error", error)
      setStatus(error.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
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
            helperText="8+ characters"
            required
          />

          {status && <div className="text-sm text-red-500 text-center">{status}</div>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? "Creating..." : "Create account"}
          </button>

          <Checkbox
            id="promotions"
            name="promotions"
            checked={values.promotions}
            onChange={handleChange}
            label="Send me news and promotions"
            color="pink"
          />

          <p className="text-xs text-gray-500 text-center leading-relaxed">
            By continuing I agree with the{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Terms & Conditions
            </a>
            ,{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>
          </p>
        </Form>
      )}
    </Formik>
  )
}
