import React from "react";

import { CameraControls, Grid } from "@react-three/drei";
import { useRef } from "react";
import { useControls, button, buttonGroup } from "leva";
import * as THREE from "three";

import { Canvas } from "@react-three/fiber";

const CameraCntrlsFn = () => {

    const cameraControlRef= useRef();

    const {DEG2RAD}= THREE.MathUtils;
    console.log(DEG2RAD);

    const cameraControls= useControls("Camera Controls", {
        horizontalRotation: buttonGroup({
            label:"H Rotation",
            opts:{
                "45deg": ()=> cameraControlRef.current.rotate(45*DEG2RAD,0, true),
                "-90deg": ()=> cameraControlRef.current.rotate(-90*DEG2RAD,0, true),
                "360deg": ()=> cameraControlRef.current.rotate(360*DEG2RAD,0, true)
            }
        }),
        verticalRotation: buttonGroup({
            label:"V Rotation",
            opts:{
                "20deg": ()=> cameraControlRef.current.rotate(20*DEG2RAD,0, true),
                "-40deg": ()=> cameraControlRef.current.rotate(-40*DEG2RAD,0, true)
                
            }
        }),

        truckGroup: buttonGroup({
            label:"T Rotation",
            opts:{
                "(1,0)": ()=> cameraControlRef.current.truck(1,0, true),
                "(0,+1)": ()=> cameraControlRef.current.truck(0,1, true),
                "(-1,-1)": ()=> cameraControlRef.current.truck(-1,-1, true)
            }
        }),
        zoomGroup: buttonGroup({
            label:"Zoom",
            opts:{
                0.25: ()=> cameraControlRef.current.zoom(0.25, true),
                "-0.25": ()=> cameraControlRef.current.zoom(-0.25, true),
            }
        }),
        lookAtBox:button(()=>{
            cameraControlRef.current.setLookAt(0,1,6,0,0,0,true); // First 3 for camera position, next 3 for camera too look at, last for transition
        })
    })

  return (
    <>
    <CameraControls ref={cameraControlRef} smoothTime={0.25}/>
      <Grid
        rotation-x={Math.PI / 4}
        args={[30, 30]}
        cellSize={0.25}
        cellColor="#6f6f6f"
        sectionSize={1}
        sectionThickness={1.5}
        sectionColor="#6364A6"
        fadeDistance={20}
        fadeStrength={0.75}
      />

      <mesh position={[0, 1, 0]} scale={2}>
        <boxGeometry />
        <meshBasicMaterial color="red" />
      </mesh>
    </>
  );
};

const CameraCntrls = () => {
    return (
      <>
        <h1 className="text-3xl font-bold text-center bg-gray-700 text-white">
          Camera Controls
        </h1>
        <div
          style={{ width: "100%", height: "85vh", backgroundColor: "skyblue" }}
        >
          <Canvas>
            <mesh>
              <CameraCntrlsFn />
            </mesh>
          </Canvas>
        </div>
      </>
    );
  };

export default CameraCntrls;
