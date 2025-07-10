import { Users, UserCheck, Monitor } from "lucide-react"
import avatar1 from "../../assets/avatar-1.b66a0518.jpg"
import avatar2 from "../../assets/avatar-2.fbec1d22.jpg"
import avatar3 from "../../assets/avatar-4.3bc8dd2c.jpg"
import avatar4 from "../../assets/avatar-5.39033dd9.jpg"

const StatsCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200">
      {/* Total Customers */}
      <div className="flex items-center gap-4 flex-1 p-6">
        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
          <Users className="w-6 h-6 text-green-600" />
        </div>
        <div className="flex flex-col">
          <p className="text-gray-500 text-sm">Total Customers</p>
          <p className="text-3xl font-bold text-gray-900">5,423</p>
          <p className="text-green-500 text-sm flex items-center mt-1">
            ↑ 16% <span className="text-gray-500 ml-1">this month</span>
          </p>
        </div>
      </div>

      {/* Members */}
      <div className="flex items-center gap-4 flex-1 p-6">
        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
          <UserCheck className="w-6 h-6 text-green-600" />
        </div>
        <div className="flex flex-col">
          <p className="text-gray-500 text-sm">Members</p>
          <p className="text-3xl font-bold text-gray-900">1,893</p>
          <p className="text-red-500 text-sm flex items-center mt-1">
            ↓ 1% <span className="text-gray-500 ml-1">this month</span>
          </p>
        </div>
      </div>

      {/* Active Now */}
      <div className="flex items-center gap-4 flex-1 p-6">
        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
          <Monitor className="w-6 h-6 text-green-600" />
        </div>
        <div className="flex flex-col">
          <p className="text-gray-500 text-sm">Active Now</p>
          <p className="text-3xl font-bold text-gray-900">189</p>
          <div className="flex -space-x-2 mt-1">
            {[avatar1, avatar2, avatar3, avatar4].map((src, idx) => (
              <img key={idx} src={src} alt="avatar" className="w-6 h-6 rounded-full border-2 border-white" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsCard 