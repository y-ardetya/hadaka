import { Loader, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import Scroller from "./components/Scroller";
import { getProject } from "@theatre/core";
import { SheetProvider } from "@theatre/r3f";

const App = () => {
  return (
    <>
      <Canvas
        gl={{ antialias: false, preserveDrawingBuffer: true }}
        camera={{ rotation: [0.3, 0, 0] }}
      >
        {/* <Perf /> */}
        <Suspense fallback={null}>
          <ScrollControls pages={6} damping={0.25}>
            <Scroller />
          </ScrollControls>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default App;
