export function WireframeCube() {
  return (
    <div className="fixed top-1/2 left-4 z-0 opacity-20 pointer-events-none hidden lg:block">
      <div className="wireframe-cube border border-pink-500/50 flex items-center justify-center">
        <div className="absolute inset-0 border border-purple-500/50 transform rotate-45" />
        <div className="absolute inset-0 border border-cyan-500/50 transform -rotate-45" />
      </div>
    </div>
  )
}
