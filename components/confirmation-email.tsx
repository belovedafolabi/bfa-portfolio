import React from "react"

interface ConfirmationEmailProps {
  name: string
}

export const ConfirmationEmail: React.FC<ConfirmationEmailProps> = ({ name }) => (
  <div className="bg-zinc-900 text-zinc-100 p-6 rounded-xl">
    <h2 className="text-2xl font-bold text-amber-400 mb-4">
      Thanks for reaching out!
    </h2>
    <div className="space-y-3">
      <p className="text-sm">
        Hi {name},<br />
        I've received your message and will get back to you within 24 hours.
      </p>
      <p className="text-xs text-zinc-400 mt-4">
        This is an automated confirmation - GreenMozis Portfolio
      </p>
    </div>
  </div>
)