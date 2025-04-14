"use client"

import { useTab } from "@/components/tab-context"

export default function DesktopNavigation() {
  const { activeTab, setActiveTab } = useTab()

  return (
    <nav className="hidden md:block sticky top-0 z-10 -mx-6 -mt-6 mb-6 bg-zinc-900/95 backdrop-blur-sm rounded-t-2xl">
      <div className="px-6 py-4 flex justify-end relative">
        <ul className="flex space-x-6">
          <li>
            <button
              onClick={() => setActiveTab("about")}
              className={`${
                activeTab === "about" ? "text-amber-400" : "text-white"
              } hover:text-amber-300 transition-colors duration-300 text-sm font-normal`}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("resume")}
              className={`${
                activeTab === "resume" ? "text-amber-400" : "text-white"
              } hover:text-amber-300 transition-colors duration-300 text-sm font-normal`}
            >
              Resume
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("portfolio")}
              className={`${
                activeTab === "portfolio" ? "text-amber-400" : "text-white"
              } hover:text-amber-300 transition-colors duration-300 text-sm font-normal`}
            >
              Portfolio
            </button>
          </li>
          {/* Blog Nav Item - Coming Soon */}
{/*           <li>
            <button
              onClick={() => setActiveTab("blog")}
              className={`${
                activeTab === "blog" ? "text-amber-400" : "text-white"
              } hover:text-amber-300 transition-colors duration-300 text-sm font-normal`}
            >
              Blog
            </button>
          </li> */}
          <li>
            <button
              onClick={() => setActiveTab("contact")}
              className={`${
                activeTab === "contact" ? "text-amber-400" : "text-white"
              } hover:text-amber-300 transition-colors duration-300 text-sm font-normal`}
            >
              Contact
            </button>
          </li>
        </ul>
        {/* Custom border that starts from the first nav item */}
        <div className="absolute bottom-0 left-[calc(100%-330px)] right-6 h-px bg-zinc-800"></div>
      </div>
    </nav>
  )
}
