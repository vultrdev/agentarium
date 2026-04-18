"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, RoundedBox, Text } from "@react-three/drei";
import { forgeDemoSession, getActiveAgents, getLatestArtifact } from "@agentarium/contracts";

export function ForgeViewport() {
  const agents = getActiveAgents(forgeDemoSession);
  const artifact = getLatestArtifact(forgeDemoSession);

  return (
    <Canvas camera={{ position: [0, 5.5, 9], fov: 42 }}>
      <color attach="background" args={["#05070d"]} />
      <fog attach="fog" args={["#05070d", 10, 20]} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 8, 4]} intensity={1.4} color="#a5b4fc" />
      <pointLight position={[0, 4, 0]} intensity={18} distance={8} color="#7f5af0" />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.4, 0]} receiveShadow>
        <circleGeometry args={[6, 64]} />
        <meshStandardMaterial color="#0b1020" />
      </mesh>

      <RoundedBox args={[2.2, 0.6, 2.2]} radius={0.12} position={[0, -0.8, 0]}>
        <meshStandardMaterial color="#101b32" metalness={0.4} roughness={0.4} />
      </RoundedBox>

      {agents.map((agent, index) => {
        const x = [-2.4, 0, 2.4][index] ?? 0;
        const color = ["#61dafb", "#7f5af0", "#23d18b"][index] ?? "#ffffff";
        return (
          <group key={agent.id} position={[x, 0, 0]}>
            <Float speed={2 + index} rotationIntensity={0.25} floatIntensity={0.5}>
              <mesh>
                <sphereGeometry args={[0.52, 32, 32]} />
                <meshStandardMaterial emissive={color} emissiveIntensity={0.8} color="#18253f" />
              </mesh>
            </Float>
            <Text position={[0, -1.05, 0]} fontSize={0.24} color="#dce7ff" anchorX="center">
              {agent.role}
            </Text>
          </group>
        );
      })}

      {artifact ? (
        <group position={[0, 0.8, 0]}>
          <Float speed={3.5} rotationIntensity={0.18} floatIntensity={0.4}>
            <mesh>
              <icosahedronGeometry args={[0.7, 0]} />
              <meshStandardMaterial color="#f5a524" emissive="#f5a524" emissiveIntensity={0.55} />
            </mesh>
          </Float>
          <Text position={[0, 1.35, 0]} fontSize={0.25} color="#fef3c7" anchorX="center">
            {artifact.status}
          </Text>
        </group>
      ) : null}

      <OrbitControls enablePan={false} minDistance={6} maxDistance={12} maxPolarAngle={Math.PI / 2.1} />
    </Canvas>
  );
}
