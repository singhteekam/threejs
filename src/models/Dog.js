import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

import DogGLB from "./../assets/dog/dog.glb"

const DogModel = () => {
  // const model = useGLTF("/dog/dog.glb");
  const model = useGLTF(DogGLB);

  const animations = useAnimations(model.animations, model.scene);
  console.log(animations);

  const ref = useRef();

  useFrame((state, _) => {
    ref.current.rotation.y = -1;
  });

  return (
    <>
      <OrbitControls />
      <hemisphereLight intensity={1} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={20}
        castShadow
        shadow-mapSize={1024}
        decay={false}
      />
      <ambientLight intensity={2} />

      <primitive ref={ref} scale={8} object={model.scene} />
    </>
  );
};

useGLTF.preload(DogGLB);

const Dog = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center bg-gray-700 text-white">
        Dog Model
      </h1>
      <div
        style={{ width: "100%", height: "85vh", backgroundColor: "skyblue" }}
      >
        <Canvas>
          <mesh>
            <DogModel />
          </mesh>
        </Canvas>
      </div>
    </>
  );
};

export default Dog;
