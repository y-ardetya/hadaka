import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import ScrollManager from "./components/ScrollManager";

const App = () => {
  return (
    <Canvas camera={{ rotation: [0.2, 0, 0] }}>
  
      <color attach="background" args={["#171720"]} />
      <ScrollControls pages={20}>
        <ScrollManager />
      </ScrollControls>
    </Canvas>
  );
};

export default App;
