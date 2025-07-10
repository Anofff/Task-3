"use client"

import { useState } from "react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { Info, Calendar, ChevronDown, X } from "lucide-react"

const countryCodes = [
  { code: "+1", label: "US" },
  { code: "+44", label: "UK" },
  { code: "+91", label: "IN" },
  { code: "+598", label: "UY" },
]

const PersonalInfoSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  gender: Yup.string().oneOf(["male", "female"]).required("Gender is required"),
  countryCode: Yup.string().required(),
  phone: Yup.string().required("Phone number is required"),
  birthday: Yup.date().nullable(),
})

export default function PersonalInfoForm({ onSave }) {
  const [step] = useState(2)
  const [totalSteps] = useState(3)

  const handleClose = () => {
    console.log("Close form")
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <h2 className="text-xl font-semibold text-gray-900">Personal information</h2>
          <span className="text-green-500 font-medium">
            {step} of {totalSteps}
          </span>
        </div>
        <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 transition-colors">
          <X size={24} />
        </button>
      </div>

      <Formik
        initialValues={{
          fullName: "",
          gender: "male",
          countryCode: "+598",
          phone: "",
          birthday: "",
        }}
        validationSchema={PersonalInfoSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false)
            if (onSave) onSave(values)
          }, 1000)
        }}
      >
        {({ values, errors, touched, isSubmitting, handleChange, setFieldValue }) => (
          <Form className="space-y-6">
            {/* Full Name */}
            <div>
              <Field
                name="fullName"
                as="input"
                type="text"
                placeholder="Full name"
                className={`w-full px-4 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500 ${
                  errors.fullName && touched.fullName ? "border-red-400" : "border-gray-300"
                }`}
              />
              {errors.fullName && touched.fullName && (
                <div className="text-xs text-red-500 mt-1">{errors.fullName}</div>
              )}
            </div>

            {/* Gender */}
            <div className="space-y-4">
              <div className="flex items-center space-x-6">
                <span className="text-gray-700 font-medium">Gender:</span>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <Field
                    type="radio"
                    name="gender"
                    value="male"
                    className="w-5 h-5 text-blue-600 border-2 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-blue-600 font-medium">Male</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <Field
                    type="radio"
                    name="gender"
                    value="female"
                    className="w-5 h-5 text-pink-500 border-2 border-gray-300 focus:ring-pink-500"
                  />
                  <span className="text-pink-500 font-medium">Female</span>
                </label>
              </div>
              {errors.gender && touched.gender && <div className="text-xs text-red-500">{errors.gender}</div>}
            </div>

            {/* Info Message */}
            <div className="flex items-center space-x-2 text-gray-600 text-sm bg-gray-50 p-3 rounded-lg">
              <Info size={16} className="text-gray-500 flex-shrink-0" />
              <span>The phone number and birthday are only visible to you</span>
            </div>

            {/* Phone Number */}
            <div className="flex space-x-3">
              <div className="relative">
                <Field
                  as="select"
                  name="countryCode"
                  className="appearance-none w-24 px-3 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 pr-8"
                >
                  {countryCodes.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.code}
                    </option>
                  ))}
                </Field>
                <ChevronDown
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={16}
                />
              </div>
              <Field
                name="phone"
                as="input"
                type="tel"
                placeholder="Phone number"
                className={`flex-1 px-4 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500 ${
                  errors.phone && touched.phone ? "border-red-400" : "border-gray-300"
                }`}
              />
            </div>
            {errors.phone && touched.phone && <div className="text-xs text-red-500">{errors.phone}</div>}

            {/* Birthday */}
            <div className="space-y-2">
              <div className="relative">
                <Field
                  name="birthday"
                  as="input"
                  type="date"
                  placeholder="Birthday"
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                  <span className="text-gray-400 text-sm">Optional</span>
                  <Calendar size={20} className="text-gray-400" />
                </div>
              </div>
              <p className="text-sm text-gray-500">Let us know about your birthday so as not to miss a gift</p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors mt-8"
            >
              {isSubmitting ? "Saving..." : "Save information"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
