"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Smartphone, Globe, Briefcase } from "lucide-react"
import { EmailTemplate } from "@/components/email-template"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormValues = z.infer<typeof formSchema>

const serviceOptions = [
  {
    id: "web",
    title: "Website Development",
    icon: Globe,
    subject: "Website Development Inquiry",
    message:
      "Hello Feranmi,\n\nI'm interested in developing a website for my business. I would like to discuss the requirements, timeline, and budget.\n\nLooking forward to your response.",
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    icon: Smartphone,
    subject: "Mobile App Development Project",
    message:
      "Hello Feranmi,\n\nI'm looking for a skilled Mobile developer to build a mobile application. I would like to discuss my app idea, features, and get your insights on development approach.\n\nLooking forward to collaborating with you.",
  },
  {
    id: "consultation",
    title: "Consultation",
    icon: Briefcase,
    subject: "Technical Consultation Request",
    message:
      "Hello Feranmi,\n\nI would like to schedule a consultation session to discuss a technical challenge I'm facing with my project. I need expert advice on architecture, technology stack, and best practices.\n\nPlease let me know your availability for a call.",
  },
]

export default function ContactSection() {
  const [activeService, setActiveService] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    }
  })

  const selectService = (serviceId: string) => {
    const service = serviceOptions.find((s) => s.id === serviceId)
    if (service) {
      setActiveService(serviceId)
      setValue("subject", service.subject)
      setValue("message", service.message)
    }
  }

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    const toastId = toast.loading("Sending message...")
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error("Failed to send message")
      
      toast.success("Message sent successfully!", { id: toastId })
      reset()
      setActiveService(null)
    } catch (error) {
      toast.error("Failed to send message. Please try again.", { id: toastId })
    } finally {
      setIsSubmitting(false)
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

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-white" htmlFor="name">Your Name</label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="John Doe"
                  className="bg-zinc-800 border-zinc-700 text-white rounded-lg"
                />
                {errors.name && <p className="text-xs text-amber-400">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-white"  htmlFor="email">Your Email</label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="john@example.com"
                  className="bg-zinc-800 border-zinc-700 text-white rounded-lg"
                />
                {errors.email && <p className="text-xs text-amber-400">{errors.email.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-white"  htmlFor="subject">Subject</label>
              <Input
                id="subject"
                {...register("subject")}
                placeholder="Project Inquiry"
                className="bg-zinc-800 border-zinc-700 text-white rounded-lg"
              />
              {errors.subject && <p className="text-xs text-amber-400">{errors.subject.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-white"  htmlFor="message">Message</label>
              <Textarea
                id="message"
                {...register("message")}
                placeholder="Tell me about your project..."
                className="min-h-32 bg-zinc-800 border-zinc-700 text-white rounded-lg"
              />
              {errors.message && <p className="text-xs text-amber-400">{errors.message.message}</p>}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-amber-gradient hover:bg-amber-500 text-black rounded-lg hover:shadow-amber transition-shadow duration-300"
            >
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
