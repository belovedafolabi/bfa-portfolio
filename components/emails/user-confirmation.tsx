import React from "react"
import { Tailwind } from "@react-email/tailwind"

interface ConfirmationTemplateProps {
  name: string
}

export const ConfirmationTemplate: React.FC<ConfirmationTemplateProps> = ({ name }) => (
  <Tailwind>
    <div className="bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 rounded-xl p-6 shadow-lg">
      {/* Logo Section */}
      <div className="flex justify-center items-center mb-8">
        <img 
          src={`${process.env.NEXT_PUBLIC_SITE_LINK}/images/bfa-icon2.png`}
          alt="BFA Logo"
          className="w-16 h-16 border-2 border-amber-400/80 hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h2 className="text-2xl font-bold text-amber-400 pb-2 mb-4 relative">
        Message Received
        <span className="absolute bottom-0 left-0 w-12 h-1 bg-amber-gradient rounded-full"></span>
      </h2>

      <div className="space-y-4 text-zinc-300">
        <p className="leading-relaxed">
          Dear <span className="text-amber-400 font-medium">{name}</span>,
        </p>
        
        <p className="text-sm border-l-2 border-amber-400 pl-3 italic">
          "I have received your message and will respond ASAP. I eagerly look forward to our conversation."
        </p>

        <div className="mt-3 pt-4 border-t border-zinc-700">
          <p className="text-sm">
            Best regards,
            <br />
            <span className="text-amber-400 font-mono">Beloved F. Afolabi</span>
          </p>
          <p className="text-xs text-white mt-2">
            Full-Stack Developer & Technical Lead
          </p>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-zinc-700">
        <p className="text-xs text-white">
          Automated confirmation - Beloved F. Afolabi Portfolio
        </p>
      </div>
    </div>
  </Tailwind>
)