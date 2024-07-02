import React from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "./../models/Loader";
import Scene from "../models/Scene";
import DreiHelpers from "../models/DreiHelpers";
import PerspectiveCameraModel from "../models/PerspectiveCameraModel";
import CubeCameraModel from "../models/CubeCameraModel";
import GridControl from "../models/Controls/GridControl";
import CameraCntrls from "../models/Controls/CameraCntrls";
import OrbitCntrls from "../models/Controls/OrbitCntrls";
import PresentationCntrls from "../models/Controls/PresentationCntrls";

const HomePage = () => {
  return (
    <>
    <h1 className="text-xl text-center justify-center">
      In this website, Learn about 3D models and how to create those models in your website.
    </h1>

      
    </>
  );
};

export default HomePage;
