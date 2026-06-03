export function SignalWidget() {
  return (
    <div className="fixed bottom-10 right-10 z-50 pointer-events-none hidden xl:block">
      <div className="window-border bg-black/80 backdrop-blur-md p-4 mono text-[10px] text-pink-400 w-48 flex flex-col gap-2 pointer-events-auto">
        <div className="flex justify-between border-b border-pink-400/20 pb-1">
          <span>SIGNAL_STRENGTH</span>
          <span>88%</span>
        </div>
        <div className="flex gap-1">
          <div className="h-1 flex-1 bg-pink-400" />
          <div className="h-1 flex-1 bg-pink-400" />
          <div className="h-1 flex-1 bg-pink-400" />
          <div className="h-1 flex-1 bg-pink-400/20" />
        </div>
      </div>
    </div>
  )
}
