import React, {Suspense} from 'react'
import {OrbitControls} from "@react-three/drei";
import { useLoader } from '@react-three/fiber';
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import LoaderModel2 from './LoaderModel2';

import { Canvas } from '@react-three/fiber';


const LoaderModelFn = () => {
    
  return (
    <>
    <OrbitControls />
    <hemisphereLight intensity={1} groundColor='black' />
    <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={20}
        castShadow
        shadow-mapSize={1024}
        decay={false}
      />
    <ambientLight intensity={2}/>
    {/* <OrbitControls /> */}
    <Suspense fallback={
        <mesh>
        <boxGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>
    }>
        <LoaderModel2 />
    </Suspense>
      
    </>
  )
}

const LoaderModel = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center bg-gray-700 text-white">
        Loader Model
      </h1>
      <div
        style={{ width: "100%", height: "85vh", backgroundColor: "skyblue" }}
      >
        <Canvas>
          <mesh>
            <LoaderModelFn />
          </mesh>
        </Canvas>
      </div>
    </>
  );
};

export default LoaderModel;
