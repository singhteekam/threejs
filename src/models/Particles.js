import React from 'react'

import { useLoader, useFrame } from '@react-three/fiber'
import * as THREE from "three";
import { useRef } from 'react';

import { Canvas } from '@react-three/fiber';

import Logo from "./../assets/logo192.png"

const ParticlesModel = () => {

    const particles= useRef();

    useFrame((state, delta)=>{
        particles.current.rotation.y+=delta*0.2
        particles.current.rotation.x+=delta*0.2
    })

    const texture= useLoader(THREE.TextureLoader, Logo);

    const verticesAmt= 2000;
    const positionedArray= new Float32Array(verticesAmt*3);

    for (let i = 0; i < verticesAmt*3; i++) {
        positionedArray[i]= (Math.random()-0.5)*10.0;
        
    }

  return (
    <points ref={particles}>
        {/* <sphereGeometry /> */}
        <bufferGeometry>
            <bufferAttribute attach="attributes-position" count={positionedArray.length}
            itemSize={3} array={positionedArray}
            />
        </bufferGeometry>
        <pointsMaterial size={0.1} alphaMap={texture} transparent depthTest={false} />
      
    </points>
  )
}

const Particles = () => {
    return (
      <>
        <h1 className="text-3xl font-bold text-center bg-gray-700 text-white">
          Particles
        </h1>
        <div
          style={{ width: "100%", height: "85vh", backgroundColor: "skyblue" }}
        >
          <Canvas>
            <mesh>
              <ParticlesModel />
            </mesh>
          </Canvas>
        </div>
      </>
    );
  };

export default Particles
