"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Smartphone, Globe, Briefcase } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [activeService, setActiveService] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the form data to your backend
    alert("Message sent! (This is a demo)")
  }

  const serviceOptions = [
    {
      id: "web",
      title: "Website Development",
      icon: Globe,
      subject: "Website Development Inquiry",
      message:
        "Hello Aakash,\n\nI'm interested in developing a website for my business. I would like to discuss the requirements, timeline, and budget.\n\nLooking forward to your response.",
    },
    {
      id: "mobile",
      title: "Mobile App Development",
      icon: Smartphone,
      subject: "Mobile App Development Project",
      message:
        "Hello Aakash,\n\nI'm looking for a skilled Flutter developer to build a mobile application. I would like to discuss my app idea, features, and get your insights on development approach.\n\nLooking forward to collaborating with you.",
    },
    {
      id: "consultation",
      title: "Consultation",
      icon: Briefcase,
      subject: "Technical Consultation Request",
      message:
        "Hello Aakash,\n\nI would like to schedule a consultation session to discuss a technical challenge I'm facing with my project. I need expert advice on architecture, technology stack, and best practices.\n\nPlease let me know your availability for a call.",
    },
  ]

  const selectService = (serviceId: string) => {
    const service = serviceOptions.find((s) => s.id === serviceId)
    if (service) {
      setActiveService(serviceId)
      setFormData((prev) => ({
        ...prev,
        subject: service.subject,
        message: service.message,
      }))
    }
  }

  return (
    <section className="space-y-6 pb-28 md:pb-8">
      <h2 className="text-3xl font-bold relative pb-2">
        Contact
        <span className="absolute bottom-0 left-0 w-12 h-1 bg-amber-gradient rounded-full"></span>
      </h2>

      <Card className="bg-zinc-800/50 backdrop-blur-sm border-rounded hover:shadow-amber transition-shadow duration-300">
        <CardContent className="p-6">
          {/* Service Selection Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            {serviceOptions.map((service) => (
              <Button
                key={service.id}
                variant="outline"
                className={`flex items-center gap-2 bg-zinc-800 border-zinc-700 hover:border-amber-400 ${
                  activeService === service.id ? "border-amber-400 text-amber-400" : "text-white"
                }`}
                onClick={() => selectService(service.id)}
              >
                <service.icon className="w-4 h-4" />
                {service.title}
              </Button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-normal text-zinc-300">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="bg-zinc-800 border-zinc-700 text-white rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-normal text-zinc-300">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="bg-zinc-800 border-zinc-700 text-white rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-xs font-normal text-zinc-300">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                required
                className="bg-zinc-800 border-zinc-700 text-white rounded-lg"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-normal text-zinc-300">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                className="min-h-32 bg-zinc-800 border-zinc-700 text-white rounded-lg"
              />
            </div>
            <Button
              type="submit"
              className="bg-amber-gradient hover:bg-amber-500 text-black rounded-lg hover:shadow-amber transition-shadow duration-300"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
