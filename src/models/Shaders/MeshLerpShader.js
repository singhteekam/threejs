import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import {
  OrbitControls,
  MeshWobbleMaterial,
  Environment,
  MeshDistortMaterial,
  GradientTexture,
  useCursor
} from "@react-three/drei";

import { useState, useEffect, useRef } from "react";
import * as THREE from "three";

const MeshLerpFn = () => {
    const cubeRef= useRef();

    const {lerp}= THREE.MathUtils;

    useFrame(()=>{
        cubeRef.current.position.x= lerp(cubeRef.current.position.x, 1,0.05);
    })

  return (
    <>
      <OrbitControls />
      <ambientLight />

      <mesh ref={cubeRef}>
       <boxGeometry />
        <meshBasicMaterial color="purple" />
          
      </mesh>
    </>
  );
};

const MeshLerpShader = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center bg-gray-700 text-white">
        Mesh Distort Material2
      </h1>
      <div
        style={{ width: "100%", height: "85vh", backgroundColor: "skyblue" }}
      >
        <Canvas>
          <mesh>
            <MeshLerpFn />
          </mesh>
        </Canvas>
      </div>
    </div>
  );
};

export default MeshLerpShader;
