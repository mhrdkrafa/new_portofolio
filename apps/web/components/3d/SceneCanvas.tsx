"use client";

import { Canvas } from "@react-three/fiber";
import { ArchitecturalLattice } from "./ArchitecturalLattice";

export interface SceneCanvasProps {
  className?: string;
  interactive?: boolean;
  reduceMotion?: boolean;
}

export function SceneCanvas({
  className = "",
  interactive = true,
  reduceMotion = false,
}: SceneCanvasProps) {
  return (
    <div className={`w-full h-full relative ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        className="pointer-events-auto"
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} color="#00F0FF" />
        <pointLight position={[-4, -4, -2]} intensity={0.8} color="#A855F7" />
        <ArchitecturalLattice interactive={interactive} reduceMotion={reduceMotion} />
      </Canvas>
    </div>
  );
}

export default SceneCanvas;
