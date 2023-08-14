import { ScrollControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import ScrollManager from "./components/ScrollManager";
import { TrippyMaterial } from "./components/TrippyMaterial";
import { useRef } from "react";

const App = () => {
  return (
    <Canvas gl={{ antialias: false }} dpr={1} camera={{ rotation: [0, 0, 0] }}>
      <Background />
      <ScrollControls pages={15} maxSpeed={3}>
        <ScrollManager />
      </ScrollControls>
    </Canvas>
  );
};

const Background = () => {
  const { viewport } = useThree();
  const $shader = useRef();

  useFrame((state, delta) => {
    $shader.current.uniforms.uTime.value += delta * 0.5;
  });

  return (
    <mesh
      scale={[viewport.width * 5, viewport.height * 5, 1]}
      position={[0, 0, -5]}
    >
      <planeGeometry />
      <trippyMaterial ref={$shader} key={TrippyMaterial.key} />
    </mesh>
  );
};

export default App;
