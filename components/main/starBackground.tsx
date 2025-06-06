"use client";
import { Suspense, useRef, useMemo } from "react";
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const StarBackground = (props: any) => {
  const ref = useRef<THREE.Points>(null);

  // Generate sphere positions using a more stable method
  const [positions, geometry] = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const radius = 1.2;
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    return [positions, geometry];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <points
        ref={ref}
        geometry={geometry}
        frustumCulled={false}
        {...props}
      >
        <pointsMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </points>
    </group>
  );
};

const StarCanvas = () => {
  return (
    <div className="w-full h-auto fixed inset-0 z-[-1]">
      <Canvas
        camera={{ position: [0, 0, 0] }}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarCanvas;
