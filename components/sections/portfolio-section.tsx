"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Drawer, DrawerContent } from "@/components/ui/drawer"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  title: string
  category: string
  image: string
  description?: string
  technologies?: string[]
  features?: string[]
  demoUrl?: string
  githubUrl?: string
}

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const projects: Project[] = [
    {
      title: "Greenmozis LTD",
      category: "Contract Company Webiste",
      image: "/images/portfolio/greenmozis.png?height=300&width=400",
      description:
        "A modern platform featuring dynamic animations and robust contact systems for a Contracting Company, built to enhance Greenmozis LTD's services and online presence. Implemented performant static generation with Next.js 13+ App Router and real-time form handling.",
      technologies: [
        "Next.js 13+",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Nodemailer",
        "Zod Validation",
        "Vercel Analytics"
      ],
      features: [
        "Scroll-triggered animated sections",
        "Dark/light mode theming system",
        "Dual-channel contact form (admin/user emails)",
        "SEO-optimized metadata strategy",
        "Responsive grid layouts (Desktop/Tablet/Mobile)",
        "Accessibility-first component library",
        "Real-time form validation & error handling",
        "Performance monitoring integration"
      ],
      demoUrl: "https://greenmozis.com.ng",
      githubUrl: "",
    },
    {
      title: "Trietix (Event Management)",
      category: "Event Management Website",
      image: "/images/portfolio/trietix.png?height=300&width=40",
      description:
        "A modern event management and ticket sales platform geared towards digitizing all processes in the event management space. Trietix -- Event Management Made [Easier, Efficient, Effortless]",
      technologies: ["Tailwind CSS", "Next JS 13+", "Typescript", "Mongo DB", "Google Auth", "Zod Validation"],
      features: [
        "Fraud free events",
        "Custom ticket sales event page",
        "Codeless Website",
        "Real time analytics",
        "Payout on demand",
        "Auto generated digital tickets",
        "Fast Check-in (QR Code)",
      ],
      demoUrl: "https://trietix.com",
      githubUrl: "",
    },
    {
      title: "Trietix (Event Management)",
      category: "Event Management Website",
      image: "/images/portfolio/trietix.png?height=300&width=40",
      description:
        "A modern event management and ticket sales platform geared towards digitizing all processes in the event management space. Trietix -- Event Management Made [Easier, Efficient, Effortless]",
      technologies: ["Tailwind CSS", "Next JS 13+", "Typescript", "Mongo DB", "Google Auth", "Zod Validation"],
      features: [
        "Fraud free events",
        "Custom ticket sales event page",
        "Codeless",
        "Real time analytics",
        "Payout on demand",
        "Auto generated digital tickets",
        "Fast Check-in (QR Code)",
      ],
      demoUrl: "https://trietix.com",
      githubUrl: "",
    },
    {
      title: "Greenmozis LTD",
      category: "Contract Company Webiste",
      image: "/images/portfolio/greenmozis.png?height=300&width=400",
      description:
        "A modern platform featuring dynamic animations and robust contact systems for a Contracting Company, built to enhance Greenmozis LTD's services and online presence. Implemented performant static generation with Next.js 13+ App Router and real-time form handling.",
      technologies: [
        "Next.js 13+",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Nodemailer",
        "Zod Validation",
        "Vercel Analytics"
      ],
      features: [
        "Scroll-triggered animated sections",
        "Dark/light mode theming system",
        "Dual-channel contact form (admin/user emails)",
        "SEO-optimized metadata strategy",
        "Responsive grid layouts (Desktop/Tablet/Mobile)",
        "Accessibility-first component library",
        "Real-time form validation & error handling",
        "Performance monitoring integration"
      ],
      demoUrl: "https://greenmozis.com.ng",
      githubUrl: "",
    },
    
  ]

  const openProjectDrawer = (project: Project) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
    
    // Smooth scroll to top of entire page
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 300);
  };

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold relative pb-2">
        Portfolio
        <span className="absolute bottom-0 left-0 w-12 h-1 bg-amber-gradient rounded-full"></span>
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-zinc-800/50 backdrop-blur-sm border-rounded overflow-hidden group hover:shadow-amber transition-shadow duration-300 cursor-pointer"
            onClick={() => openProjectDrawer(project)}
          >
            <CardContent className="p-0 relative">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="text-amber-400 text-sm">{project.category}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Project Details Drawer */}
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="max-w-4xl mx-auto h-[85vh] md:h-[90vh] overflow-y-auto scrollbar-hide">
          {selectedProject && (
            <div className="space-y-6">
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedProject.title}</h2>
                    <p className="text-amber-400">{selectedProject.category}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pb-[calc(16px+env(safe-area-inset-bottom))] px-4 md:pb-16">
                <p className="text-zinc-300 text-xs font-normal leading-relaxed">
                  {selectedProject.description}
                </p>

                {selectedProject.technologies && (
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-amber-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.features && (
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                    <ul className="space-y-2 list-disc pl-5 text-zinc-300 text-xs font-normal leading-relaxed">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {(selectedProject.demoUrl || selectedProject.githubUrl) && (
                  <div className="flex flex-col md:flex-row gap-4 mb-8 md:mb-0">
                    {selectedProject.demoUrl && (
                      <a
                        href={selectedProject.demoUrl}
                        className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-3 bg-amber-gradient text-black rounded-lg hover:shadow-amber transition-shadow duration-300"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-3 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"
                      >
                        <Github size={16} />
                        View Code
                      </a>
                    )}
                  </div>
                )}

                <div className="md:hidden flex min-h-20 min-w-full"></div>
              </div>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </section>
  )
}
