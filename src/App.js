
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import Header from './components/Header';
import Bike from './models/Bike';
import Dog from './models/Dog';
import CubeCameraModel from './models/CubeCameraModel';
import CustomCanva from './models/CustomCanva';
import DreiHelpers from './models/DreiHelpers';
import Loader from './models/Loader';
import LoaderModel from './models/loaderModel';
import LoaderModel2 from './models/LoaderModel2';
import Particles from './models/Particles';
import PerspectiveCameraModel from './models/PerspectiveCameraModel';
import CameraCntrls from './models/Controls/CameraCntrls';
import GridControl from './models/Controls/GridControl';
import OrbitCntrls from './models/Controls/OrbitCntrls';
import PresentationCntrls from './models/Controls/PresentationCntrls';
import TransformCntls from './models/Controls/TransformCntls';
import PivotCntrls from './models/Controls/PivotCntrls';
import ScrollControl from './models/Controls/ScrollControl';
import Text3DModel from './models/Text3DModel';
import PositionalAudioModel from './models/PositionalAudioModel';
import MeshReflector from './models/Shaders/MeshReflector';
import MeshWobble from './models/Shaders/MeshWobble';
import MeshDistort from './models/Shaders/MeshDistort';

function App() {
  return (
    // <HomePage />
    <>
      <HashRouter>
      <Header />
        <main>
          <Routes>
          <Route path={"/"} element={<HomePage />} exact />
          <Route path={`/bike`} element={<Bike />} />
          <Route path={`/dog`} element={<Dog />} />
          <Route path="/cubecameramodel" element={<CubeCameraModel />} />
          <Route path="/customcanva" element={<CustomCanva />} />
          <Route path="/dreihelpers" element={<DreiHelpers />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/loadermodel" element={<LoaderModel />} />
          <Route path="/loadermodel2" element={<LoaderModel2 />} />
          <Route path="/particles" element={<Particles />} />
          <Route path="/perspectivecamera" element={<PerspectiveCameraModel />} />\
          

          {/* Controls */}
          <Route path="/cameracontrols" element={<CameraCntrls />} />
          <Route path="/gridcontrols" element={<GridControl />} />
          <Route path="/orbitcontrols" element={<OrbitCntrls />} />
          <Route path="/presentationcontrols" element={<PresentationCntrls />} />
          <Route path="/transformcontrols" element={<TransformCntls />} />
          <Route path="/pivotcontrols" element={<PivotCntrls />} />
          <Route path="/scrollcontrols" element={<ScrollControl />} />

          <Route path="/text3d" element={<Text3DModel />} />
          <Route path="/positionalaudio" element={<PositionalAudioModel />} />
          
          <Route path="/meshreflector" element={<MeshReflector />} />
          <Route path="/meshwobble" element={<MeshWobble />} />
          <Route path="/meshdistort" element={<MeshDistort />} />
          </Routes>
        </main>
      </HashRouter>
    </>
  );
}

export default App;
