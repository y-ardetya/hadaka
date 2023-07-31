import { Loader, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Overlay from "./components/Overlay";
import Sprite from "./components/Sprite";
import City from "./components/City";
import { Perf } from "r3f-perf";
import { Suspense } from "react";

const App = () => {
  return (
    <>
      <Canvas gl={{ antialias: false }} camera={{ rotation: [0.3, 0, 0] }}>
        <Perf />
        <Suspense fallback={null}>
          <ScrollControls pages={6}>
            <Scroll html>
              <Overlay />
            </Scroll>
            <Scroll>
              <Sprite />
            </Scroll>
            <Scroll>
              <City />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default App;
