import { OptimizedImage } from "@/components/ui/OptimizedImage";
import type { ProjectMedia } from "@/types/api";

export interface ProjectMediaViewerProps {
  media: ProjectMedia;
  className?: string;
  priority?: boolean;
}

export function ProjectMediaViewer({
  media,
  className = "",
  priority = false,
}: ProjectMediaViewerProps) {
  const mediaUrl = media.file_url || media.file_path;

  return (
    <figure
      className={`relative rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-md ${className}`}
    >
      {/* 1. Image Media */}
      {media.media_type === "image" && (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
          <OptimizedImage
            src={mediaUrl}
            alt={media.caption || "Project Visual Specimen"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            className="object-cover"
            priority={priority}
          />
        </div>
      )}

      {/* 2. Code Specimen / Terminal Window */}
      {media.media_type === "code" && (
        <div className="w-full bg-[#0d1117] text-zinc-300 font-mono text-xs">
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-zinc-800">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-[11px] text-zinc-400">{media.caption || "architecture-specimen.ts"}</span>
            <span className="text-[10px] text-zinc-500">READONLY</span>
          </div>

          {/* Terminal Body */}
          <div className="p-5 overflow-x-auto leading-relaxed">
            <pre className="text-zinc-300">
              <code>
                <span className="text-purple-400">export async function</span>{" "}
                <span className="text-cyan-300">dispatchStreamPipeline</span>(
                <span className="text-amber-300">payload</span>: TransactionContext
                ): <span className="text-emerald-300">Promise&lt;AckReceipt&gt;</span> &#123;
                {"\n"}  <span className="text-zinc-500">{"// Atomic Redis distributed lock acquisition"}</span>
                {"\n"}  <span className="text-purple-400">const</span> lock = <span className="text-purple-400">await</span> Redis.acquireLock(payload.id, 250);
                {"\n"}  <span className="text-purple-400">if</span> (!lock) <span className="text-purple-400">throw new</span> ConcurrencyLockException();
                {"\n"}
                {"\n"}  <span className="text-zinc-500">{"// Publish to sub-millisecond settlement worker stream"}</span>
                {"\n"}  <span className="text-purple-400">const</span> streamSeq = <span className="text-purple-400">await</span> Redis.xadd(<span className="text-emerald-400">&quot;events:transact&quot;</span>, <span className="text-emerald-400">&quot;*&quot;</span>, payload);
                {"\n"}  <span className="text-purple-400">return</span> &#123; status: <span className="text-emerald-400">&quot;ACK&quot;</span>, seq: streamSeq &#125;;
                {"\n"}&#125;
              </code>
            </pre>
          </div>
        </div>
      )}

      {/* 3. Video Media */}
      {media.media_type === "video" && (
        <div className="relative aspect-video w-full bg-zinc-950 flex items-center justify-center">
          <video
            controls
            preload="metadata"
            className="w-full h-full object-cover"
            poster="/images/video-poster.jpg"
          >
            <source src={mediaUrl} type="video/mp4" />
            Your browser does not support HTML5 video tags.
          </video>
        </div>
      )}

      {/* 4. Interactive Sandbox */}
      {media.media_type === "interactive" && (
        <div className="relative aspect-[16/9] w-full bg-zinc-900/90 flex flex-col items-center justify-center p-8 text-center">
          <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
            ⟐
          </div>
          <h4 className="text-sm font-bold text-white mb-1">Interactive Topology Canvas</h4>
          <p className="text-xs text-zinc-400 max-w-sm mb-4">
            WebGL interactive topology node running isolated simulation loop.
          </p>
          <span className="px-3 py-1 rounded text-[11px] font-mono bg-zinc-800 text-zinc-300 border border-zinc-700">
            Click to Launch Sandbox
          </span>
        </div>
      )}

      {/* Media Caption Footer */}
      {media.caption && (
        <figcaption className="px-4 py-3 bg-zinc-900/90 border-t border-zinc-800/80 text-xs font-mono text-zinc-400 flex items-center justify-between">
          <span>{media.caption}</span>
          <span className="text-[10px] uppercase tracking-wider text-cyan-400/80">
            FIG // 0{media.sort_order}
          </span>
        </figcaption>
      )}
    </figure>
  );
}
