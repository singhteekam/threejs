import React from 'react'
import { Canvas } from '@react-three/fiber'

import { OrbitControls, MeshWobbleMaterial, Environment } from '@react-three/drei'

const MeshWobbleFn = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight />

      <mesh>
        <boxGeometry args={[1,1,1,32,32,32]} />
        <MeshWobbleMaterial color="purple" factor={4} speed={0.7} />
      </mesh>


    </>
  )
}


const MeshWobble = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center bg-gray-700 text-white">
          Mesh Wobble Material
        </h1>
        <div
          style={{ width: "100%", height: "85vh", backgroundColor: "skyblue" }}
        >
          <Canvas>
            <mesh>
              <MeshWobbleFn />
            </mesh>
          </Canvas>
        </div> 
    </div>
  )
}


export default MeshWobble
