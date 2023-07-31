import {
  Loader,
  Scroll,
  ScrollControls,
  SpriteAnimator,
  useKTX2,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import Overlay from "./components/Overlay";
import * as THREE from "three";

const App = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Sketch />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

const Rig = ({ v3 = new THREE.Vector3() }) => {
  return useFrame((state) => {
    state.camera.position.lerp(
      v3.set(state.mouse.x / 2, state.mouse.y / 2, 10),
      0.1
    );
  });
};

const Sketch = () => {
  const [front, back, eyes, ring, smoke, boss, tv1, tv2] = useKTX2([
    "/obj_building_front.ktx2",
    "/obj_building_back.ktx2",
    "/light-boss-behind-eyes.ktx2",
    "/light-boss-behind.ktx2",
    "/background_hitomi.ktx2",
    "/obj_boss.ktx2",
    "/tv1.ktx2",
    "/tv2.ktx2",
  ]);

  return (
    <>
      <ScrollControls pages={5}>
        <Scroll html>
          <Overlay />
        </Scroll>
        <Scroll>
          <Rig />
          <SpriteAnimator
            scale={5}
            position={[10, 0, 0]}
            startFrame={0}
            autoPlay={true}
            loop={true}
            numberOfFrames={20}
            alphaTest={0.01}
            textureImageURL={"/nakamura.webp"}
          />
          <SpriteAnimator
            scale={5}
            position={[-10, 0, 0]}
            startFrame={0}
            autoPlay={true}
            loop={true}
            numberOfFrames={20}
            alphaTest={0.01}
            textureImageURL={"/kodera.webp"}
          />
        </Scroll>
        <Scroll>
          <SpriteAnimator
            scale={12}
            position={[0, -37, 0]}
            startFrame={0}
            autoPlay={true}
            loop={true}
            numberOfFrames={20}
            alphaTest={0.01}
            fps={10}
            textureImageURL={"/kimura.webp"}
          />

          <mesh
            position={[-2, 4, 0]}
            scale={[3, 3, 1]}
            rotation={[Math.PI, 0, 0]}
          >
            <planeGeometry />
            <meshBasicMaterial
              map={tv1}
              side={THREE.DoubleSide}
              transparent
              opacity={1}
            />
          </mesh>
          <mesh
            position={[2, 4.5, 0]}
            scale={[5, 5, 1]}
            rotation={[Math.PI, 0, 0]}
          >
            <planeGeometry />
            <meshBasicMaterial
              map={tv2}
              side={THREE.DoubleSide}
              transparent
              opacity={1}
            />
          </mesh>
          <mesh
            position={[0, -30, -1]}
            scale={[10, 15, 1]}
            rotation={[Math.PI, 0, 0]}
          >
            <planeGeometry />
            <meshBasicMaterial
              map={boss}
              side={THREE.DoubleSide}
              transparent
              opacity={1}
            />
          </mesh>
          <mesh
            position={[0, -35, -1]}
            scale={[30, 15, 1]}
            rotation={[Math.PI, 0, 0]}
          >
            <planeGeometry />
            <meshBasicMaterial
              map={front}
              side={THREE.DoubleSide}
              transparent
              opacity={1}
            />
          </mesh>
          <mesh
            position={[0, -35, -3]}
            scale={[40, 20, 1]}
            rotation={[Math.PI, 0, 0]}
          >
            <planeGeometry />
            <meshBasicMaterial
              map={back}
              side={THREE.DoubleSide}
              transparent
              opacity={1}
            />
          </mesh>

          <mesh position={[0, -23, -3]} scale={5} rotation={[Math.PI, 0, 0]}>
            <planeGeometry />
            <meshBasicMaterial
              map={eyes}
              side={THREE.DoubleSide}
              transparent
              opacity={1}
            />
          </mesh>
          <mesh position={[0, -25, -5]} scale={30} rotation={[Math.PI, 0, 0]}>
            <planeGeometry />
            <meshBasicMaterial
              map={ring}
              side={THREE.DoubleSide}
              transparent
              opacity={1}
            />
          </mesh>
          <mesh
            position={[0, -36, -1]}
            scale={[20, 16, 1]}
            rotation={[Math.PI, 0, 0]}
          >
            <planeGeometry />
            <meshBasicMaterial
              map={smoke}
              side={THREE.DoubleSide}
              transparent
              opacity={1}
            />
          </mesh>
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default App;
