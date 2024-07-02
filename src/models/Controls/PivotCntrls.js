import React from 'react'

import { PivotControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const PivotCntrlsFn = () => {
  return (
    <>
      <PivotControls
        anchor={[-1,0,0]}
        depthTest={false}
        axisColors={["red", "green", "pink"]}
        lineWidth={7}
        scale={2}
      >
        <mesh position-x={2} scale={2}>
            <boxGeometry />
            <meshBasicMaterial color="purple" />
        </mesh>
      </PivotControls>
    </>
  )
}



const PivotCntrls = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center bg-gray-700 text-white">
        Pivot Controls
      </h1>
      <div
        style={{ width: "100%", height: "85vh", backgroundColor: "skyblue" }}
      >
        <Canvas>
          <mesh>
            <PivotCntrlsFn />
          </mesh>
        </Canvas>
      </div>
    </>
  )
}

export default PivotCntrls
