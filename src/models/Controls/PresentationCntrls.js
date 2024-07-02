import React from 'react'
import { PresentationControls } from '@react-three/drei';

import { Canvas } from '@react-three/fiber';

const PresentationCntrlsFn = () => {
  return (
    <>
    <PresentationControls 
    global // able to drag model from anywhere on screen
    polar={[-Math.PI/3, Math.PI/3]}
    azimuth={[-Math.PI/2, Math.PI/2]}
    config={{mass:2, tension:500}}
    snap={{mass:4, tension:2000}}
    >
      <mesh scale={2}>
        <boxGeometry />
        <meshBasicMaterial color="red" />
      </mesh>
      </PresentationControls>
    </>
  )
}

const PresentationCntrls = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center bg-gray-700 text-white">
        Presentation Controls
      </h1>
      <div
        style={{ width: "100%", height: "85vh", backgroundColor: "skyblue" }}
      >
        <Canvas>
          <mesh>
            <PresentationCntrlsFn />
          </mesh>
        </Canvas>
      </div>
    </>
  );
};

export default PresentationCntrls;

// When we rotate and release the model then it goes back to its initial position

