import React from 'react'
import { OrbitControls } from '@react-three/drei'

import { Canvas } from '@react-three/fiber'

const OrbitCntrlsFn = () => {
  return (
    <>
        <OrbitControls 
            enableDamping={true}  // default: false
            dampingFactor={0.05} // how early rotating. Lower value slow rotation
            // autoRotate={true}
            // autoRotateSpeed={50}
            minAzimuthAngle={-Math.PI/2}
            maxAzimuthAngle={Math.PI/2}
            minPolarAngle={-Math.PI/4}
            maxPolarAngle={Math.PI/4}
        />
        <mesh scale={3}>
        <boxGeometry />
        <meshBasicMaterial color="red" />
      </mesh>
    </>
  )
}

const OrbitCntrls = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center bg-gray-700 text-white">
        Orbit Controls
      </h1>
      <div
        style={{ width: "100%", height: "85vh", backgroundColor: "skyblue" }}
      >
        <Canvas>
          <mesh>
            <OrbitCntrlsFn />
          </mesh>
        </Canvas>
      </div>
    </>
  );
};

export default OrbitCntrls
