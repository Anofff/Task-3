import { useState } from "react"
import { X } from "lucide-react"
import SocialButtons from "./SocialButtons"
import RegisterForm from "./RegisterForm"
import LoginForm from "./LoginForms"

export default function AuthModal({ onRegisterSuccess }) {
  const [activeTab, setActiveTab] = useState("register")

  const handleClose = () => {
    console.log("Close modal")
  }

  // Handler for after registration (propagate to parent)
  const handleRegisterSuccess = () => {
    if (onRegisterSuccess) onRegisterSuccess()
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md mx-auto">
      {/* Header with tabs and close button */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab("register")}
            className={`text-lg font-medium pb-2 border-b-2 transition-all duration-200 ${
              activeTab === "register"
                ? "text-gray-900 border-pink-500"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            Register
          </button>
          <button
            onClick={() => setActiveTab("login")}
            className={`text-lg font-medium pb-2 border-b-2 transition-all duration-200 ${
              activeTab === "login"
                ? "text-gray-900 border-pink-500"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            Log in
          </button>
        </div>
        <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 transition-colors">
          <X size={24} />
        </button>
      </div>

      {/* Social login buttons */}
      <SocialButtons />

      {/* Divider text */}
      <p className="text-center text-gray-500 text-sm mb-8">or {activeTab} with email</p>

      {/* Form Content */}
      {activeTab === "register" ? (
        <RegisterForm onSuccess={handleRegisterSuccess} />
      ) : (
        <LoginForm />
      )}
    </div>
  )
}
