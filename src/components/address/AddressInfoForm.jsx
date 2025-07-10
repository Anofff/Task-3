import { useState } from "react"
import { Search, MapPin, X, Users, Clock, DollarSign } from "lucide-react"
import ManualAddressForm from "./ManualAddressForm"

export default function AddressInfoForm({ onSave }) {
  const [step] = useState(3)
  const [totalSteps] = useState(3)
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showManual, setShowManual] = useState(false)

  const handleClose = () => {
    console.log("Close form")
  }

  const handleUseCurrentLocation = async () => {
    setIsLoading(true)
    try {
      // Simulate getting current location
      await new Promise((resolve) => setTimeout(resolve, 2000))
      const locationData = {
        type: "current_location",
        address: "Current location detected",
        coordinates: { lat: 0, lng: 0 },
      }
      if (onSave) onSave(locationData)
    } catch (error) {
      console.error("Error getting location:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleAddManually = () => {
    setShowManual(true)
  }

  const handleManualSave = (manualData) => {
    setShowManual(false)
    if (onSave) onSave({ type: "manual", ...manualData })
  }

  const handleManualBack = () => {
    setShowManual(false)
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const benefits = [
    {
      icon: Users,
      text: "People near you",
    },
    {
      icon: Clock,
      text: "Estimated delivery time",
    },
    {
      icon: DollarSign,
      text: "Estimate shipping costs",
    },
  ]

  if (showManual) {
    return <ManualAddressForm onSave={handleManualSave} onBack={handleManualBack} />
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

      <div className="space-y-6">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for address"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 placeholder-gray-500"
          />
        </div>

        {/* Privacy Notice */}
        <p className="text-sm text-gray-500">Your address is not visible to other users</p>

        {/* Action Buttons - Following exact design */}
        <div className="flex items-center space-x-4">
          <button
            onClick={handleUseCurrentLocation}
            disabled={isLoading}
            className="flex items-center justify-center space-x-2 px-6 py-3 border border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
          >
            <MapPin size={18} />
            <span>{isLoading ? "Getting location..." : "Use current location"}</span>
          </button>

          <button
            onClick={handleAddManually}
            className="px-6 py-3 text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
          >
            Add manually
          </button>
        </div>

        {/* Placeholder for map pin (red dot) */}
        <div className="flex justify-center pt-4">
          <div className="w-2 h-2 bg-red-500 rounded-full" />
        </div>

        {/* Benefits Section */}
        <div className="pt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Sharing your address shows:</h3>

          <div className="space-y-5">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <IconComponent className="text-gray-500" size={20} />
                  </div>
                  <span className="text-gray-700 text-base">{benefit.text}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
