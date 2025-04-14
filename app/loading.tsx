export default function Loading() {
  return (
    <div className="min-h-screen bg-dark-121212 flex flex-col items-center justify-center text-white">
      <div className="w-full max-w-md bg-zinc-900 border border-white-border-gradient rounded-2xl p-8 backdrop-blur-sm shadow-lg text-center">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Pulsing logo */}
          <div className="relative w-24 h-24 rounded-xl overflow-hidden mb-4 bg-zinc-800">
            <div className="absolute inset-0 bg-amber-gradient opacity-50 animate-pulse"></div>
          </div>

          <h2 className="text-2xl font-bold">Loading...</h2>

          {/* Loading bar */}
          <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-amber-gradient animate-loading-bar"></div>
          </div>

          <p className="text-zinc-400">Please wait while your experience is loaded...</p>
        </div>
      </div>
    </div>
  )
}
