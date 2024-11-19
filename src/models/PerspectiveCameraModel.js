import React from "react";
import {
  OrbitControls,
  useHelper,
  Sparkles,
  Stars,
  Cloud,
  Sky,
  Environment,
  PerspectiveCamera
} from "@react-three/drei";

import { Canvas } from "@react-three/fiber";

import EnvMap from './../assets/envMap/img.hdr';

const PerspectiveCameraModelFn = () => {
  return (
    <>
      <OrbitControls enableZoom={false} />

      <PerspectiveCamera makeDefault position={[0,0,5]} fov={100} />

      <Environment
          background
        files={EnvMap}
      />

      <mesh>
        <sphereGeometry />
        <meshStandardMaterial />
      </mesh>

    </>
  );
};

const PerspectiveCameraModel = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center bg-gray-700 text-white">
        Perspective Camera Model
      </h1>
      <div
        style={{ width: "100%", height: "85vh", backgroundColor: "skyblue" }}
      >
        <Canvas>
          <mesh>
            <PerspectiveCameraModelFn />
          </mesh>
        </Canvas>
      </div>
    </>
  );
};

export default PerspectiveCameraModel;
