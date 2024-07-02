import { ScrollControls, Scroll, useGLTF } from "@react-three/drei";
import Images from "./Images";

import { Canvas } from "@react-three/fiber";

const ScrollControlFn = () => {
  const model = useGLTF("./scrollimages/model.gltf");

  return (
    <>
      <ambientLight intensity={4} />
      <directionalLight />

      <ScrollControls 
      pages={3} 
      damping={0.4} 
      // infinite 
      // horizontal
      >
        <Scroll>
          <Images />
          <primitive object={model.scene} position={[1.5, -1, 0]} scale={0.5} />
        </Scroll>

        <Scroll html>
          <h1 style={{ position: "absolute", top: "60vh", left: "0.5em" }}>
            to
          </h1>
          <h1 style={{ position: "absolute", top: "120vh", left: "60vw" }}>
            be
          </h1>
          <h1
            style={{
              position: "absolute",
              top: "198.5vh",
              left: "0.5vw",
              fontSize: "40vw",
            }}
          >
            home
          </h1>
        </Scroll>
      </ScrollControls>
    </>
  );
};

const ScrollControl = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center bg-gray-700 text-white">
          Scroll Controls
        </h1>
        <div
          style={{ width: "100%", height: "85vh", backgroundColor: "skyblue" }}
        >
          <Canvas>
            <mesh>
              <ScrollControlFn />
            </mesh>
          </Canvas>
        </div> 
    </>
  )
}


export default ScrollControl;
