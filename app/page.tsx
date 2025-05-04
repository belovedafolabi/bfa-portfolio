"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { TabProvider } from "@/components/tab-context"
import ProfileSidebar from "@/components/profile-sidebar"
import MainContent from "@/components/main-content"
import DesktopNavigation from "@/components/desktop-navigation"
import MobileNavigation from "@/components/mobile-navigation"
import Loading from "./loading"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <TabProvider>
      <div className="min-h-screen bg-dark-121212 text-white">
        {!isLoading && (
          <>
            <div className="container mx-auto px-4 py-8 md:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Sidebar */}
                <div className="lg:col-span-1">
                  <ProfileSidebar />
                </div>

                {/* Main Content with Tabs */}
                <div className="lg:col-span-2 relative border-rounded rounded-2xl">
                  <div className="bg-zinc-900 rounded-2xl p-6 backdrop-blur-sm shadow-lg relative">
                    {/* Desktop Navigation - Now inside the right section */}
                    <DesktopNavigation />
                    <MainContent />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            <MobileNavigation />

            {/* Extra space at the bottom to prevent mobile nav from covering content */}
            <div className="md:hidden h-24"></div>
          </>
        )}
      </div>
    </TabProvider>
  )
}
