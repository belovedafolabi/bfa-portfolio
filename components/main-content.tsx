"use client"

import { useTab } from "@/components/tab-context"
import AboutSection from "@/components/sections/about-section"
import ResumeSection from "@/components/sections/resume-section"
import PortfolioSection from "@/components/sections/portfolio-section"
import BlogSection from "@/components/sections/blog-section"
import ContactSection from "@/components/sections/contact-section"
import { cn } from "@/lib/utils"

export default function MainContent() {
  const { activeTab, isTransitioning } = useTab()

  return (
    <div className="space-y-8">
      <div className={cn("transition-opacity duration-300 ease-in-out", isTransitioning ? "opacity-0" : "opacity-100")}>
        {activeTab === "about" && <AboutSection />}
        {activeTab === "resume" && <ResumeSection />}
        {activeTab === "portfolio" && <PortfolioSection />}
        {activeTab === "blog" && <BlogSection />}
        {activeTab === "contact" && <ContactSection />}
      </div>
    </div>
  )
}
