"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type TabType = "about" | "resume" | "portfolio" | "blog" | "contact"

interface TabContextType {
  activeTab: TabType
  setActiveTab: (tab: TabType) => void
  isTransitioning: boolean
}

const TabContext = createContext<TabContextType | undefined>(undefined)

export function TabProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<TabType>("about")
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleTabChange = (tab: TabType) => {
    if (tab !== activeTab) {
      setIsTransitioning(true)
      // Set a small delay to allow for the fade-out animation
      setTimeout(() => {
        setActiveTab(tab)
        // Allow time for the fade-in animation
        setTimeout(() => {
          setIsTransitioning(false)
        }, 50)
      }, 300)
    }
  }

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab: handleTabChange, isTransitioning }}>
      {children}
    </TabContext.Provider>
  )
}

export function useTab() {
  const context = useContext(TabContext)
  if (context === undefined) {
    throw new Error("useTab must be used within a TabProvider")
  }
  return context
}
