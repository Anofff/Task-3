import { useState } from "react"
import { X } from "lucide-react"

export default function ManualAddressForm({ onSave, onBack }) {
  const [step] = useState(3)
  const [totalSteps] = useState(3)
  const [formData, setFormData] = useState({
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Manual address submitted:", formData)
    if (onSave) onSave(formData)

    setIsSubmitting(false)
  }

  const handleClose = () => {
    if (onBack) {
      onBack()
    } else {
      console.log("Close form")
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <h2 className="text-xl font-semibold text-gray-900">Add address</h2>
          <span className="text-green-500 font-medium">
            {step} of {totalSteps}
          </span>
        </div>
        <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 transition-colors">
          <X size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Street Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Street address</label>
          <input
            type="text"
            value={formData.streetAddress}
            onChange={(e) => handleInputChange("streetAddress", e.target.value)}
            placeholder="319 Bainbridge Street"
            className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400"
            required
          />
        </div>

        {/* Apartment */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Apartment</label>
          <input
            type="text"
            value={formData.apartment}
            onChange={(e) => handleInputChange("apartment", e.target.value)}
            placeholder="Apartment"
            className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 pr-20"
          />
          <span className="absolute right-4 top-11 text-gray-400 text-sm">Optional</span>
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => handleInputChange("city", e.target.value)}
            placeholder="New York City"
            className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400"
            required
          />
        </div>

        {/* State and Zip Code */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
            <input
              type="text"
              value={formData.state}
              onChange={(e) => handleInputChange("state", e.target.value)}
              placeholder="New York"
              className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Zip code</label>
            <input
              type="text"
              value={formData.zipCode}
              onChange={(e) => handleInputChange("zipCode", e.target.value)}
              placeholder="11233"
              className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-indigo-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors mt-8"
        >
          {isSubmitting ? "Saving..." : "Save information"}
        </button>
      </form>
    </div>
  )
}
