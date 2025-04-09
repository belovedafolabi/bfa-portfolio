"use client"

import { User, FileText, Briefcase, BookOpen, Mail } from "lucide-react"
import { useTab } from "@/components/tab-context"

export default function MobileNavigation() {
  const { activeTab, setActiveTab } = useTab()

  const handleTabClick = (tab: "about" | "resume" | "portfolio" | "blog" | "contact") => {
    setActiveTab(tab)
    // Scroll to top when changing tabs on mobile
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-zinc-900/80 backdrop-blur-md border-t border-zinc-800 z-50 rounded-t-xl shadow-lg">
      <div className="flex justify-around items-center h-16">
        <button
          onClick={() => handleTabClick("about")}
          className={`flex flex-col items-center justify-center w-full h-full ${
            activeTab === "about" ? "text-amber-400" : "text-zinc-400"
          }`}
        >
          <User className="w-5 h-5" />
          <span className="text-[10px] mt-1">About</span>
        </button>
        <button
          onClick={() => handleTabClick("resume")}
          className={`flex flex-col items-center justify-center w-full h-full ${
            activeTab === "resume" ? "text-amber-400" : "text-zinc-400"
          }`}
        >
          <FileText className="w-5 h-5" />
          <span className="text-[10px] mt-1">Resume</span>
        </button>
        <button
          onClick={() => handleTabClick("portfolio")}
          className={`flex flex-col items-center justify-center w-full h-full ${
            activeTab === "portfolio" ? "text-amber-400" : "text-zinc-400"
          }`}
        >
          <Briefcase className="w-5 h-5" />
          <span className="text-[10px] mt-1">Portfolio</span>
        </button>
        <button
          onClick={() => handleTabClick("blog")}
          className={`flex flex-col items-center justify-center w-full h-full ${
            activeTab === "blog" ? "text-amber-400" : "text-zinc-400"
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-[10px] mt-1">Blog</span>
        </button>
        <button
          onClick={() => handleTabClick("contact")}
          className={`flex flex-col items-center justify-center w-full h-full ${
            activeTab === "contact" ? "text-amber-400" : "text-zinc-400"
          }`}
        >
          <Mail className="w-5 h-5" />
          <span className="text-[10px] mt-1">Contact</span>
        </button>
      </div>
    </div>
  )
}
