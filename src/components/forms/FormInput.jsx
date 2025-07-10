import { useState } from "react"
import { Eye, EyeOff, Check } from "lucide-react"

export default function FormInput({
  label,
  type = "text",
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  hasPasswordToggle = false,
  showValidation = false,
  isValid = false,
  error,
  helperText,
  required = false,
}) {
  const [showPassword, setShowPassword] = useState(false)

  const inputType = hasPasswordToggle ? (showPassword ? "text" : "password") : type

  const getBorderStyle = () => {
    if (hasPasswordToggle && value.length > 0 && isValid) {
      return "border-indigo-500 focus:ring-indigo-500 focus:border-indigo-500"
    }
    return "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
  }

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="relative">
        <input
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 pr-12 ${getBorderStyle()}`}
          placeholder={placeholder}
          required={required}
        />

        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
          {showValidation && isValid && <Check className="text-green-500" size={20} />}

          {hasPasswordToggle && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}
        </div>
      </div>
      {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
      {helperText && !error && <p className="text-xs text-gray-500 mt-2">{helperText}</p>}
    </div>
  )
}
