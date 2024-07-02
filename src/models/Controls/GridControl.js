import React from 'react'

import {OrbitControls, Grid } from '@react-three/drei'

import { Canvas } from '@react-three/fiber'

const GridControlFn = () => {
  return (
    <>
    <OrbitControls enableZoom={true} />
      <Grid rotation-x={Math.PI/4}
        args={[30,30]}
        cellSize={0.25}
        cellColor="#6f6f6f"
        sectionSize={1}
        sectionThickness={1.5}
        sectionColor="#6364A6"
        fadeDistance={20}
        fadeStrength={0.75}
      />

      <mesh position={[0,1,0]} scale={2}>
        <boxGeometry />
        <meshBasicMaterial color="red" />
      </mesh>
    </>
  )
}

const GridControl = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center bg-gray-700 text-white">
        Cube Camera Model
      </h1>
      <div
        style={{ width: "100%", height: "85vh", backgroundColor: "skyblue" }}
      >
        <Canvas>
          <mesh>
            <GridControlFn />
          </mesh>
        </Canvas>
      </div>
    </>
  );
};

export default GridControl;
