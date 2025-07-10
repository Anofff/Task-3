import { AppSidebar } from "../components/layout/AppSidebar"
import DashboardContent from "../components/dashboard/DashboardContent"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden md:block">
        <AppSidebar />
      </div>
      <main className="flex-1 bg-gray-50 p-4 overflow-auto">
        <DashboardContent />
      </main>
    </div>
  )
}