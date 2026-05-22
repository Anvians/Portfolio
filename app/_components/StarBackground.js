"use client";
import React, { useState, useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

function StarField({ count, radius, size, color, speed }) {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(count * 3), { radius }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta * speed[0];
    ref.current.rotation.y -= delta * speed[1];
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function NebulaCloud({ position, color1, color2 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.02;
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 0.3) * 0.05);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[3, 3, 1, 1]} />
      <meshBasicMaterial
        transparent
        opacity={0.06}
        color={color1}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      {/* Deep background stars — dense and small */}
      <StarField count={4000} radius={2.5} size={0.002} color="#c7d2fe" speed={[0.03, 0.04]} />
      {/* Mid-field bright stars */}
      <StarField count={800} radius={1.8} size={0.004} color="#e0f2fe" speed={[0.05, 0.06]} />
      {/* Foreground sparkle stars */}
      <StarField count={200} radius={1.2} size={0.008} color="#00e5ff" speed={[0.08, 0.1]} />
      {/* Violet accent stars */}
      <StarField count={150} radius={1.5} size={0.006} color="#c084fc" speed={[0.04, 0.05]} />
      
      {/* Nebula clouds */}
      <NebulaCloud position={[-0.5, 0.3, -0.8]} color1="#7c3aed" color2="#00e5ff" />
      <NebulaCloud position={[0.6, -0.2, -1]} color1="#0ea5e9" color2="#7c3aed" />
    </>
  );
}

export default function StarBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      
      {/* Radial vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(2,2,10,0.7) 100%)",
        }}
      />
      
      {/* Nebula color wash */}
      <div
        className="absolute inset-0 animate-nebula"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 20% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 50% 35% at 80% 30%, rgba(0,229,255,0.06) 0%, transparent 70%)",
          animationDelay: "-7s",
        }}
        className="absolute inset-0 animate-nebula"
      />
      <div
        className="absolute inset-0 animate-nebula"
        style={{
          background: "radial-gradient(ellipse 40% 50% at 60% 80%, rgba(244,63,94,0.05) 0%, transparent 70%)",
          animationDelay: "-14s",
        }}
      />
    </div>
  );
}
