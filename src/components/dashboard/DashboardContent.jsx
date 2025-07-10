import { useState } from "react"
import { Search, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import StatsCard from "./StatsCard"

const customerData = [
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active",
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive",
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phone: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive",
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phone: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active",
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phone: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active",
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phone: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active",
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phone: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active",
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phone: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive",
  },
]

export default function DashboardContent() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("Newest")

  const avatars = [
    "/placeholder.svg?height=32&width=32",
    "/placeholder.svg?height=32&width=32",
    "/placeholder.svg?height=32&width=32",
    "/placeholder.svg?height=32&width=32",
    "/placeholder.svg?height=32&width=32",
  ]

  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-semibold">Hello Evano 👋,</h1>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Stats Cards */}
      <StatsCard />

      {/* Customers Table */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold">All Customers</h2>
              <p className="text-green-500 text-sm">Active Members</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>A-Z</option>
                    <option>Z-A</option>
                  </select>
                  <ChevronDown
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={16}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Customer Name</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Company</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Phone Number</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Email</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Country</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody>
                {customerData.map((customer, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium">{customer.name}</td>
                    <td className="py-4 px-4 text-gray-600">{customer.company}</td>
                    <td className="py-4 px-4 text-gray-600">{customer.phone}</td>
                    <td className="py-4 px-4 text-gray-600">{customer.email}</td>
                    <td className="py-4 px-4 text-gray-600">{customer.country}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          customer.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {customer.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-gray-500">Showing data 1 to 8 of 256K entries</p>
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                <ChevronLeft size={16} />
              </button>
              <button className="px-3 py-2 bg-indigo-600 text-white rounded-lg">1</button>
              <button className="px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">2</button>
              <button className="px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">3</button>
              <button className="px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">4</button>
              <span className="px-2 text-gray-400">...</span>
              <button className="px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">40</button>
              <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
