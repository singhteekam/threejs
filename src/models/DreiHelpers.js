import {
  OrbitControls,
  useHelper,
  Sparkles,
  Stars,
  Cloud,
  Sky,
  Environment,
} from "@react-three/drei";

import { useControls } from "leva";

import { useRef } from "react";

import { Canvas } from "@react-three/fiber";

function DreiHelpersModel() {
  const { sunPosition } = useControls("sky", {
    sunPosition: {
      value: [0, 1, 0],
    },
  });

  const {meshIntensity} = useControls("mesh intensity", {
    meshIntensity: { value: 1, min: 0, max: 5 },
  });

  const {height, radius, scale} = useControls("ground", {
    height: { value: 6, min: 0, max: 20 },
    radius: { value: 60, min: 0, max: 100 },
    scale: { value: 70, min: 0, max: 100 },
  });

  return (
    <>
      <OrbitControls enableZoom={false} />

      {/* <ambientLight />

      <directionalLight /> */}

      {/* <Sparkles
          count={1000}
          speed={0.2}
          opacity={3}
          color="white"
          scale={[10,10,10]}
          size={2}
  
      /> */}

      {/* <Stars
        radius={2}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      /> */}

      {/* <Cloud
  
          opacity={1}
  
        /> */}

      {/* <Cloud
            opacity={1}
            speed={0.2}
            width={10}
            depth={1.5}
            segments={20}
            depthTest={false}
        /> */}

      {/* <Sky sunPosition={sunPosition} /> */}

      <Environment 
    //   background 
      files={"./envMap/img.hdr"} 
        ground={{
            // height:6, radius:60, scale:70
            height:height, radius:radius, scale:scale
        }}
      />

      <mesh castShadow position-y={1}>
        <boxGeometry />
        <meshStandardMaterial color="#C7CAC7" envMapIntensity={meshIntensity} />
      </mesh>

      <mesh
        receiveShadow
        scale={[3, 3, 3]}
        position-y={0}
        rotation-x={-Math.PI * 0.5}
      >
        <planeGeometry />

        <meshStandardMaterial color="yellow"  />
      </mesh>
    </>
  );
}

const DreiHelpers = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center bg-gray-700 text-white">
        Drei Helpers
      </h1>
      <div
        style={{ width: "100%", height: "85vh", backgroundColor: "skyblue" }}
      >
        <Canvas>
          <mesh>
            <DreiHelpersModel />
          </mesh>
        </Canvas>
      </div>
    </>
  );
};

export default DreiHelpers;
