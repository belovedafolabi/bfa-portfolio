import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function PortfolioSection() {
  const projects = [
    {
      title: "E-Commerce Mobile App",
      category: "Mobile App",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Task Management Dashboard",
      category: "Web App",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Health & Fitness Tracker",
      category: "Mobile App",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Social Media Platform",
      category: "Web & Mobile",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section id="portfolio" className="space-y-6 pt-8">
      <h2 className="text-3xl font-bold relative pb-2">
        Portfolio
        <span className="absolute bottom-0 left-0 w-12 h-1 bg-amber-400"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden group">
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
    </section>
  )
}
