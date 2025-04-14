import React from "react"

interface EmailTemplateProps {
  name: string
  email: string
  subject: string
  message: string
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div className="bg-zinc-900 text-zinc-100 p-6 rounded-xl">
    <h2 className="text-2xl font-bold text-amber-400 mb-4">{subject}</h2>
    <div className="space-y-3">
      <p className="text-sm">
        <span className="text-amber-400">From:</span> {name} &lt;{email}&gt;
      </p>
      <div className="bg-zinc-800/50 p-4 rounded-lg">
        <p className="text-zinc-300 whitespace-pre-wrap">{message}</p>
      </div>
      <p className="text-xs text-zinc-400 mt-4">
        Sent via GreenMozis Portfolio Contact Form
      </p>
    </div>
  </div>
)