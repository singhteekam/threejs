import React, { useState } from 'react'
import { OrbitControls, PositionalAudio } from '@react-three/drei'

import { Canvas } from '@react-three/fiber';

import PosAudio from "./../assets/audio/1.mp4"

const PositionalAudioModelFn = () => {

    const [play, setPlay]= useState(false);

  return (
    <>
      <OrbitControls />

      {play&& (
        <PositionalAudio url={PosAudio} autoplay loop distance={4} />
      )}

      <mesh onClick={()=>setPlay(!play)}>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>

    </>
  )
}

const PositionalAudioModel = () => {
  return (
    <>
        <h1 className="text-3xl font-bold text-center bg-gray-700 text-white">
        Positional Audio Model
      </h1>
      <div
        style={{ width: "100%", height: "85vh", backgroundColor: "skyblue" }}
      >
        <Canvas>
          <mesh>
            <PositionalAudioModelFn />
          </mesh>
        </Canvas>
      </div> 
    </>
  )
}

export default PositionalAudioModel
