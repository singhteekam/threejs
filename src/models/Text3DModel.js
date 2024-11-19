import React, {useRef} from 'react'
import { Canvas } from '@react-three/fiber'

import { OrbitControls, Text, Text3D, Center, Float, Html } from '@react-three/drei'

import Fontttf from "./../assets/fonts/SemiBoldItalic.ttf";
import Fontjson from "./../assets/fonts/SemiBold_Italic.json"

const Text3DFn = () => {

  const cubeRef= useRef();

  return (
    <>
      <OrbitControls />

      <Text 
        color="black"
        fontSize={0.8}
        font={Fontttf}
        position-y={1}
        rotation-y={-Math.PI*0.1}
        maxWidth={3}
        textAlign='center'
      >
        This is Text
      </Text>

      <Center>
        <Float speed={5} floatIntensity={4}>
        <Text3D
          font={Fontjson}
          height={1}
          size={0.8}
          letterSpacing={-0.1}
          bevelEnabled
          bevelSegments={20}
        >
          3d Text
          <meshNormalMaterial />
        </Text3D>
        </Float>

      </Center>


      <Float speed={8} floatIntensity={6}>
      <mesh position-y={-2} ref={cubeRef} >
        <boxGeometry />
        <meshBasicMaterial color="orange" />

        <Html 
          position={[-0.7,0.5,0.5]}
          wrapperClass='text3d'
          distanceFactor={5}
          occlude={[cubeRef]}
        >
          R3F
        </Html>
      </mesh>
      </Float>

      <mesh position={[2,-2,1]} >
        <boxGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>


    </>
  )
}

const Text3DModel = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center bg-gray-700 text-white">
          3D Text
        </h1>
        <div
          style={{ width: "100%", height: "85vh", backgroundColor: "skyblue" }}
        >
          <Canvas>
            <mesh>
              <Text3DFn />
            </mesh>
          </Canvas>
        </div> 
    </div>
  )
}


export default Text3DModel;