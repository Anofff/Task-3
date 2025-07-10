import { useState } from "react"
import AuthModal from "../components/auth/AuthModal"
import PersonalInfoForm from "../components/forms/PersonalInfoForm"
import AddressInfoForm from "../components/address/AddressInfoForm"
import SuccessModal from "../components/ui/SucessModal"

export default function Home() {
  const [stage, setStage] = useState("auth") // 'auth' | 'personal' | 'address' | 'success'

  const handleRegisterComplete = () => {
    setStage("personal")
  }

  const handlePersonalInfoSave = (values) => {
    console.log("Personal information saved:", values)
    setStage("address")
  }

  const handleAddressSave = (address) => {
    console.log("Address saved:", address)
    setStage("success")
  }

  const handleSuccessClose = () => {
    setStage("auth")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {stage === "auth" && <AuthModal onRegisterSuccess={handleRegisterComplete} />}
      {stage === "personal" && <PersonalInfoForm onSave={handlePersonalInfoSave} />}
      {stage === "address" && <AddressInfoForm onSave={handleAddressSave} />}
      {stage === "success" && <SuccessModal onClose={handleSuccessClose} onGoToLogin={handleSuccessClose} />}
    </div>
  )
} 