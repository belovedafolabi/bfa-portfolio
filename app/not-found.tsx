import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-121212 flex flex-col items-center justify-center text-white p-4">
      <div className="w-full max-w-md bg-zinc-900 border border-white-border-gradient rounded-2xl p-8 backdrop-blur-sm shadow-lg hover:shadow-amber transition-shadow duration-300 text-center">
        <div className="mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl mx-auto flex items-center justify-center">
            <span className="text-5xl font-bold text-black">404</span>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-2">Page Not Found</h1>
        <p className="text-zinc-400 mb-8">The page you are looking for doesn't exist or has been moved.</p>

        <Link href="/">
          <Button className="bg-amber-gradient hover:bg-amber-500 text-black rounded-lg hover:shadow-amber transition-shadow duration-300">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
