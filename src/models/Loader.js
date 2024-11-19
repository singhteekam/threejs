import { useLoader } from '@react-three/fiber';
import React from 'react'
import * as THREE from "three";
import { Canvas } from '@react-three/fiber';

import Logo from "./../assets/logo192.png";

const LoaderModel = () => {

    const texture= useLoader(THREE.TextureLoader, Logo);

  return (
    <mesh position={[6, 0, 0]}>
        <planeGeometry args={[4,4]} />
        <meshBasicMaterial map={texture} />
    </mesh>
  )
}

const Loader = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center bg-gray-700 text-white">
        Loader
      </h1>
      <div
        style={{ width: "100%", height: "85vh", backgroundColor: "skyblue" }}
      >
        <Canvas>
          <mesh>
            <LoaderModel />
          </mesh>
        </Canvas>
      </div>
    </>
  );
};

export default Loader
