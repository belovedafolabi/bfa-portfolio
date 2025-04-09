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
      title: "E-Commerce Mobile App",
      category: "Mobile App",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "A comprehensive e-commerce mobile application built with Flutter, offering a seamless shopping experience with advanced features like product search, filtering, cart management, and secure payment processing.",
      technologies: ["Flutter", "Dart", "Firebase", "RESTful APIs", "Stripe Payment"],
      features: [
        "User authentication and profile management",
        "Product catalog with categories and search",
        "Shopping cart and wishlist functionality",
        "Order tracking and history",
        "Payment gateway integration",
        "Push notifications",
      ],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management Dashboard",
      category: "Web App",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "A powerful task management dashboard designed to help teams organize, track, and complete projects efficiently. Features include task assignment, progress tracking, deadline management, and team collaboration tools.",
      technologies: ["Flutter Web", "Firebase", "Cloud Firestore", "Authentication", "Charts"],
      features: [
        "Project and task organization",
        "Team member assignment",
        "Progress tracking with visual charts",
        "Deadline notifications",
        "File attachments",
        "Activity logs and reporting",
      ],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Health & Fitness Tracker",
      category: "Mobile App",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "A comprehensive health and fitness tracking application that helps users monitor their physical activities, nutrition intake, and overall wellness. The app provides personalized insights and recommendations based on user data.",
      technologies: ["Flutter", "BLoC Pattern", "Health APIs", "SQLite", "Charts"],
      features: [
        "Activity tracking (steps, distance, calories)",
        "Workout plans and routines",
        "Nutrition and water intake logging",
        "Sleep monitoring",
        "Progress visualization",
        "Goal setting and achievements",
      ],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media Platform",
      category: "Web & Mobile",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "A cross-platform social media application that connects users through shared interests, content creation, and community engagement. The platform supports various media types and interactive features to enhance user experience.",
      technologies: ["Flutter", "Firebase", "Cloud Functions", "Real-time Database", "Storage"],
      features: [
        "User profiles and connections",
        "Content creation and sharing",
        "Real-time messaging",
        "Notifications system",
        "Content discovery algorithm",
        "Privacy controls and moderation",
      ],
      demoUrl: "#",
      githubUrl: "#",
    },
  ]

  const openProjectDrawer = (project: Project) => {
    setSelectedProject(project)
    setIsDrawerOpen(true)
  }

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
        <DrawerContent className="max-w-4xl mx-auto">
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

              <div className="space-y-6">
                <p className="text-zinc-300 text-xs font-normal leading-relaxed">{selectedProject.description}</p>

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

                <div className="flex gap-4 pt-4 mb-16">
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-amber-gradient text-black rounded-lg hover:shadow-amber transition-shadow duration-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </section>
  )
}
