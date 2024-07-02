import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, TransformControls } from '@react-three/drei'


const TransformCntlsFn=()=>{
    return (
        <>
            <OrbitControls makeDefault />

            <TransformControls position-x={2} mode='translate'>
                <mesh>
                    <boxGeometry />
                    <meshBasicMaterial color="purple" />
                </mesh>
            </TransformControls>
            
        </>
    )
}

const TransformCntls = () => {
  return (
    <>
        <h1 className="text-3xl font-bold text-center bg-gray-700 text-white">
          Transform Controls
        </h1>
        <div
          style={{ width: "100%", height: "85vh", backgroundColor: "skyblue" }}
        >
          <Canvas>
            <mesh>
              <TransformCntlsFn />
            </mesh>
          </Canvas>
        </div> 
    </>
  )
}

export default TransformCntls
