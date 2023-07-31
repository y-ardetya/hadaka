import { Loader, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import Scroller from "./components/Scroller";
import { getProject } from "@theatre/core";
import { SheetProvider } from "@theatre/r3f";

const App = () => {
  const sheet = getProject("Fly Through").sheet("Scene");
  return (
    <>
      <Canvas gl={{ antialias: false, preserveDrawingBuffer: true }}>
        {/* <Perf /> */}
        <Suspense fallback={null}>
          <ScrollControls pages={10}>
            <SheetProvider sheet={sheet}>
              <Scroller />
            </SheetProvider>
          </ScrollControls>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default App;
