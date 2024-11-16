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

const MeshDistortFn = () => {
    const planeRef= useRef();
    const [hover, setHover]= useState(false);
    useCursor(hover);

    useEffect(()=>{

        if(hover){
            planeRef.current.material.distort=0.6;
        }
        else{
            planeRef.current.material.distort=0;
        }
    }, [hover]);

    // Using lerp method
    const {lerp}= THREE.MathUtils;

    useFrame(()=>{
      planeRef.current.material.distort= lerp(planeRef.current.material.distort, hover?0.4:0, 
        hover?0.05:0.01
      )
    })

  return (
    <>
      <OrbitControls />
      <ambientLight />

      <mesh ref={planeRef} onPointerOver={()=>setHover(true)} onPointerOut={()=>setHover(false)}>
        <planeGeometry args={[2, 3, 8, 8]} />
        <MeshDistortMaterial speed={2} distort={0.7}>
          <GradientTexture colors={["aquamarine", "hotpink"]} stops={[0, 1]} />
        </MeshDistortMaterial>
      </mesh>

      {/* Using lerp method */}
      <mesh>
        <meshBasicMaterial color="purple" />
      </mesh>
    </>
  );
};

const MeshDistort = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center bg-gray-700 text-white">
        Mesh Distort Material
      </h1>
      <div
        style={{ width: "100%", height: "85vh", backgroundColor: "skyblue" }}
      >
        <Canvas>
          <mesh>
            <MeshDistortFn />
          </mesh>
        </Canvas>
      </div>
    </div>
  );
};

export default MeshDistort;
