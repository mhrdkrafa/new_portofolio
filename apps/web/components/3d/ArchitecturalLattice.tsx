"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ArchitecturalLatticeProps {
  interactive?: boolean;
}

export function ArchitecturalLattice({ interactive = true }: ArchitecturalLatticeProps) {
  const outerGroupRef = useRef<THREE.Group>(null);
  const innerMeshRef = useRef<THREE.Mesh>(null);
  const pointerTarget = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    // Subtle, steady ambient rotation
    if (outerGroupRef.current) {
      outerGroupRef.current.rotation.x += delta * 0.15;
      outerGroupRef.current.rotation.y += delta * 0.22;

      // Pointer responsiveness
      if (interactive) {
        pointerTarget.current.x = state.pointer.x * 0.4;
        pointerTarget.current.y = state.pointer.y * 0.4;

        outerGroupRef.current.rotation.y +=
          (pointerTarget.current.x - outerGroupRef.current.rotation.y) * 0.05;
        outerGroupRef.current.rotation.x +=
          (-pointerTarget.current.y - outerGroupRef.current.rotation.x) * 0.05;
      }
    }

    // Counter-rotation for inner core
    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.x -= delta * 0.25;
      innerMeshRef.current.rotation.z += delta * 0.18;
    }
  });

  return (
    <group ref={outerGroupRef}>
      {/* Outer Architectural Lattice (Icosahedron Wireframe) */}
      <mesh>
        <icosahedronGeometry args={[1.65, 1]} />
        <meshBasicMaterial
          color="#00F0FF"
          wireframe
          transparent
          opacity={0.32}
        />
      </mesh>

      {/* Outer Node Vertices Points */}
      <points>
        <icosahedronGeometry args={[1.65, 1]} />
        <pointsMaterial
          color="#00F0FF"
          size={0.06}
          transparent
          opacity={0.85}
        />
      </points>

      {/* Mid Topological Cage (Octahedron Wireframe) */}
      <mesh>
        <octahedronGeometry args={[1.1, 0]} />
        <meshBasicMaterial
          color="#A855F7"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Inner Crystalline Core */}
      <mesh ref={innerMeshRef}>
        <dodecahedronGeometry args={[0.65, 0]} />
        <meshStandardMaterial
          color="#0A0A0C"
          emissive="#00F0FF"
          emissiveIntensity={0.35}
          roughness={0.2}
          metalness={0.8}
          wireframe={false}
        />
      </mesh>
    </group>
  );
}
