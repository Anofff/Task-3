import { createContext } from "react"

export const SidebarContext = createContext()

export function SidebarProvider({ children }) {
  // minimal provider – no state yet
  return <SidebarContext.Provider value={{}}>{children}</SidebarContext.Provider>
}

export function Sidebar({ children, className = "" }) {
  return <aside className={className}>{children}</aside>
}

export function SidebarHeader({ children, className = "" }) {
  return <div className={className}>{children}</div>
}

export function SidebarContent({ children, className = "" }) {
  return <div className={className}>{children}</div>
}

export function SidebarFooter({ children, className = "" }) {
  return <div className={className}>{children}</div>
}

export function SidebarMenu({ children, className = "" }) {
  return <ul className={className}>{children}</ul>
}

export function SidebarMenuItem({ children }) {
  return <li>{children}</li>
}

export function SidebarMenuButton({ children, isActive = false, className = "" }) {
  return (
    <button className={`${className} ${isActive ? "font-semibold" : ""}`}>{children}</button>
  )
}

export function SidebarGroup({ children }) {
  return <div>{children}</div>
}

export function SidebarGroupContent({ children }) {
  return <div>{children}</div>
}

export function SidebarInset({ children }) {
  return <main className="flex-1">{children}</main>
}

export function SidebarTrigger() {
  // placeholder – could toggle collapse state if implemented
  return null
} 