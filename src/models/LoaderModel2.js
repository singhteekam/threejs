// import React from 'react'
// import {OrbitControls} from "@react-three/drei";
// import { useLoader } from '@react-three/fiber';
// import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"


// const LoaderModel2 = () => {
//     const model= useLoader(GLTFLoader, "./desktop_computer/scene.gltf");
//     console.log(model);
//   return (
//     <>
//       <primitive object={model.scene} />
//     </>
//   )
// }

// export default LoaderModel2


// USING DREI TO LOADING THE MODEL

import React from 'react'

import {useGLTF} from "@react-three/drei"

import { Canvas } from '@react-three/fiber';

import Computer from "./../assets/desktop_computer/scene.gltf"

const LoaderModel2Fn = () => {
    // const model= useGLTF("/desktop_computer/scene.gltf");
    const model= useGLTF(Computer);
    console.log(model);
  return (
    <>
      <primitive object={model.scene} />
    </>
  )
}

useGLTF.preload(Computer);

const LoaderModel2 = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center bg-gray-700 text-white">
        Loader Model 2
      </h1>
      <div
        style={{ width: "100%", height: "85vh", backgroundColor: "skyblue" }}
      >
        <Canvas>
          <mesh>
            <LoaderModel2Fn />
          </mesh>
        </Canvas>
      </div>
    </>
  );
};

export default LoaderModel2

