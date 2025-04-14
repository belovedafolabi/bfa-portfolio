import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-121212 flex flex-col items-center justify-center text-white p-4">
      {/* Changed: Added flex flex-col and text-center */}
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-xl relative group before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-amber-500 before:to-purple-600 before:-z-10 flex flex-col items-center text-center before:backdrop-blur-sm hover:shadow-amber transition-shadow duration-300">
        
        {/* 404 Badge - Already centered via mx-auto */}
        <div className="mb-6 p-4 rounded-xl w-full">
          <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl mx-auto flex items-center justify-center p-4 max-w-[200px]">
            <span className="text-5xl font-bold text-white">404</span>
          </div>
        </div>

        {/* Changed: Added text-center */}
        <h1 className="text-3xl font-bold mb-2 text-center">Page Not Found</h1>
        
        {/* Changed: Added text-center */}
        <p className="text-zinc-400 mb-8 text-center px-4">
          The page you are looking for doesn't exist or has been moved.
        </p>

        {/* Button wrapper - Centered via parent flex */}
        <div className="flex justify-center">
          <Link href="/">
            <Button className="bg-amber-gradient hover:bg-amber-500 text-black rounded-lg hover:shadow-amber transition-shadow duration-300">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}