export default function Loading() {
  return (
    <div className="min-h-screen p-8 md:p-16 max-w-7xl mx-auto flex flex-col justify-between animate-pulse">
      <div className="flex justify-between items-center py-6 border-b border-white/5">
        <div className="h-4 w-32 bg-zinc-800/80 rounded" />
        <div className="flex space-x-6">
          <div className="h-4 w-16 bg-zinc-800/80 rounded" />
          <div className="h-4 w-16 bg-zinc-800/80 rounded" />
          <div className="h-4 w-16 bg-zinc-800/80 rounded" />
        </div>
      </div>

      <div className="my-auto py-20 space-y-6 max-w-3xl">
        <div className="h-6 w-48 bg-zinc-800/60 rounded-full" />
        <div className="h-16 w-full max-w-xl bg-zinc-800/80 rounded-lg" />
        <div className="h-8 w-3/4 bg-zinc-800/60 rounded-lg" />
        <div className="h-20 w-full bg-zinc-800/40 rounded-lg" />
        <div className="flex gap-4 pt-4">
          <div className="h-10 w-36 bg-zinc-800/80 rounded-md" />
          <div className="h-10 w-36 bg-zinc-800/50 rounded-md" />
        </div>
      </div>

      <div className="py-6 border-t border-white/5 flex justify-between">
        <div className="h-4 w-48 bg-zinc-800/60 rounded" />
        <div className="h-4 w-32 bg-zinc-800/60 rounded" />
      </div>
    </div>
  );
}
