import React from "react"
import { Tailwind } from "@react-email/tailwind"

interface AdminTemplateProps {
  name: string
  email: string
  message: string
}

export const AdminTemplate: React.FC<AdminTemplateProps> = ({
  name,
  email,
  message,
}) => (
    <Tailwind>
        <div className="bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-amber-400 pb-2 mb-4 relative">
            New Contact Submission
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-amber-gradient rounded-full"></span>
            </h2>
            
            <div className="space-y-4 text-zinc-300">
            <div className="flex items-baseline gap-2">
                <span className="text-amber-400 font-medium min-w-[60px]">Name: {name}</span>
            </div>
            
            <div className="flex items-baseline gap-2">
                <span className="text-amber-400 font-medium min-w-[60px]">Email: {email}</span>
            </div>
            
            <div className="mt-3">
                <div className="flex items-center gap-2 mb-3">
                <span className="text-amber-400 font-medium">Message</span>
                <div className="h-px flex-1 bg-zinc-700"></div>
                </div>
                <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
                <p className="text-sm whitespace-pre-wrap leading-relaxed font-mono">
                    {message}
                </p>
                </div>
            </div>
            </div>

            <div className="mt-3 pt-4 border-t border-zinc-700">
            <p className="text-xs text-white">
                Sent via BFA Portfolio
            </p>
            </div>
        </div>
    </Tailwind>
)