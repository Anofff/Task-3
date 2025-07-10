export default function Checkbox({ id, name, checked, onChange, label, color = "indigo" }) {
  const getColorClass = () => {
    switch (color) {
      case "pink":
        return "text-pink-500 focus:ring-pink-500"
      case "indigo":
        return "text-indigo-600 focus:ring-indigo-500"
      default:
        return "text-indigo-600 focus:ring-indigo-500"
    }
  }

  return (
    <div className="flex items-center space-x-3">
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        className={`w-5 h-5 border-2 border-gray-300 rounded ${getColorClass()}`}
      />
      <label htmlFor={id} className="text-gray-700 text-sm">
        {label}
      </label>
    </div>
  )
}
