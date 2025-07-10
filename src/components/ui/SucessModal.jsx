import { X } from "lucide-react"
import successIllustration from "../../assets/Sucess.png"

const SuccessModal = ({ onClose, onGoToLogin }) => {
  const handleGoToLogin = () => {
    if (onGoToLogin) {
      onGoToLogin()
    } else {
      console.log("Navigate to login")
    }
  }

  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl overflow-hidden w-[90%] max-w-md">
        {/* Image + close */}
        <div className="relative bg-gradient-to-br from-pink-100 to-purple-100 flex justify-center items-center p-8">
          <img
            src={successIllustration}
            alt="Success Illustration"
            className="w-60 h-auto object-contain"
          />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Text section */}
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            You are successfully registered!
          </h2>
          <button
            onClick={handleGoToLogin}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl w-full transition-colors"
          >
            Go to Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuccessModal

