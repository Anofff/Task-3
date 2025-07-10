"use client"

import { LayoutDashboard, Package, Users, DollarSign, Megaphone, HelpCircle, ChevronRight } from "lucide-react"
import { useState } from "react"
import evanoAvatar from "../../assets/anoff_avatar.jpg"

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Product",
    icon: Package,
    hasSubmenu: true,
  },
  {
    title: "Customers",
    icon: Users,
    hasSubmenu: true,
  },
  {
    title: "Income",
    icon: DollarSign,
    hasSubmenu: true,
  },
  {
    title: "Promote",
    icon: Megaphone,
    hasSubmenu: true,
  },
  {
    title: "Help",
    icon: HelpCircle,
    hasSubmenu: true,
  },
]

export function AppSidebar() {
  const [active, setActive] = useState("Dashboard")
  return (
    <aside className="group w-20 hover:w-64 bg-white border-r border-gray-200 flex flex-col transition-all duration-300">
      {/* Header */}
      <header className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded-full"></div>
          </div>
          <span className="text-xl font-semibold hidden group-hover:inline">Dashboard</span>
          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded hidden group-hover:inline">v.01</span>
        </div>
      </header>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto px-4 py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.title}>
              <button
                onClick={() => setActive(item.title)}
                className={`w-full flex items-center justify-between rounded-lg px-4 py-2 transition-colors ${
                  item.title === active ? "bg-[#5932EA] text-white hover:bg-[#482ad2]" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon size={20} />
                  <span className="hidden group-hover:inline">{item.title}</span>
                </div>
                {item.hasSubmenu && (
                  <ChevronRight
                    size={16}
                    className={`${item.title === active ? "text-white" : "text-gray-400"} hidden group-hover:block`}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Upgrade Card - show only when expanded */}
      <div className="p-4 hidden group-hover:block">
        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 text-white text-center">
          <h3 className="font-semibold mb-4">Upgrade to PRO to get access all Features!</h3>
          <button className="w-full bg-white text-purple-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
            Get Pro Now!
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <img src={evanoAvatar} alt="Evano" className="w-10 h-10 rounded-full" />
          <div className="hidden group-hover:block ml-3">
            <p className="font-medium text-gray-900">Evano</p>
            <p className="text-sm text-gray-500">Project Manager</p>
          </div>
          <ChevronRight size={16} className="text-gray-400 hidden group-hover:block" />
        </div>
      </footer>
    </aside>
  )
}
