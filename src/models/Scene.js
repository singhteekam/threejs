import React from "react";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import { OrbitControls } from "@react-three/drei";

import * as THREE from "three";
import CustomCanva from "./CustomCanva";
import Loader from "./Loader";
import Particles from "./Particles";
import LoaderModel from "./loaderModel";
import Bike from "./Bike";
import Dog from "./Dog";


const Scene = () => {
  const ref = useRef();

  useFrame((state, delta) => {
    // ref.current.rotation.y+=delta;
    // state.camera.position.x = Math.sin(state.clock.elapsedTime);
  });

  return (
    <>
    {/* <OrbitControls /> */}
      {/* <mesh ref={ref} position={[-2, 0, 0]}>
        <planeGeometry args={[3, 3]} />
        <meshBasicMaterial color="orange" side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[2, 0, 0]}>
        <boxGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>
      <CustomCanva /> */}
      {/* <Loader /> */}
      {/* <Particles /> */}
      {/* <LoaderModel /> */}

      
      {/* <Bike scale={1.2} /> */}
      {/* <Dog /> */}
    </>
  );
};

export default Scene;
