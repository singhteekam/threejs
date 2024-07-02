import React from "react";
import {
  OrbitControls,
  useHelper,
  Sparkles,
  Stars,
  Cloud,
  Sky,
  Environment,
  PerspectiveCamera,
  CubeCamera,
} from "@react-three/drei";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";

const CubeCameraModelFn = () => {

    const cubeRef= useRef();

    useFrame((_, delta)=>{
        cubeRef.current.rotation.x+=delta;
        cubeRef.current.rotation.y+=delta;
    })

  return (
    <>
      <OrbitControls enableZoom={false} />

      <Environment background files={"/envMap/img.hdr"} />

      <CubeCamera resolution={1024} frames={Infinity}>
        {(texture) => (
          <mesh scale={2}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial
              envMap={texture}
              roughness={0}
              metalness={0.9}
            />
          </mesh>
        )}
      </CubeCamera>

      <mesh ref={cubeRef} position-z={5}>
        <boxGeometry />
        <meshStandardMaterial color="purple"  />
      </mesh>
    </>
  );
};

const CubeCameraModel = () => {
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
            <CubeCameraModelFn />
          </mesh>
        </Canvas>
      </div>
    </>
  );
};

export default CubeCameraModel;
