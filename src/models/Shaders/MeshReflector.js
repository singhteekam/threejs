import React from 'react'
import { Canvas } from '@react-three/fiber'

import { OrbitControls, MeshReflectorMaterial, Environment } from '@react-three/drei'

import EnvMap from './../../assets/envMap/img.hdr';

const MeshReflectorFn = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight />

      <Environment background files={EnvMap} />

      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>

      <mesh rotation-x={-Math.PI*0.5} position-y={-0.75}>
        <planeGeometry args={[6,6]} />
        <MeshReflectorMaterial
            resolution={512}
            color="gray"
            // blur={[1000,1000]}
            // mixBlur={1}
            mirror={1}
        />
      </mesh>

    </>
  )
}


const MeshReflector = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center bg-gray-700 text-white">
          Mesh Reflector Material
        </h1>
        <div
          style={{ width: "100%", height: "85vh", backgroundColor: "skyblue" }}
        >
          <Canvas>
            <mesh>
              <MeshReflectorFn />
            </mesh>
          </Canvas>
        </div> 
    </div>
  )
}


export default MeshReflector
