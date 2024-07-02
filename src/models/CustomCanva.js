import React from 'react'
import * as THREE from "three";
import { Canvas } from '@react-three/fiber';

const CustomCanvaModel = () => {

    const positionedArray= new Float32Array([0,0,0,0,1,0,1,0,0]);


  return (
    <mesh >
        <bufferGeometry>
            <bufferAttribute
                attach="attributes-position"
                count={3}
                itemSize={3}
                array={positionedArray}
            />
        </bufferGeometry>
        <meshBasicMaterial color="red" side={THREE.DoubleSide} />
      
    </mesh>
  )
}

const CustomCanva = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center bg-gray-700 text-white">
        Custom Canva
      </h1>
      <div
        style={{ width: "100%", height: "85vh", backgroundColor: "skyblue" }}
      >
        <Canvas>
          <mesh>
            <CustomCanvaModel />
          </mesh>
        </Canvas>
      </div>
    </>
  );
};

export default CustomCanva
