import {
  Html,
  Image,
  Scroll,
  SpriteAnimator,
  Svg,
  useKTX2,
  useScroll,
} from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import Sprite from "./Sprite";
import { easing } from "maath";
import Overlay from "./Overlay";

const geo = new THREE.PlaneGeometry();

const ScrollManager = () => {
  const group = useRef();
  const im = useRef();
  const splash1 = useRef();
  const splash2 = useRef();
  const splash3 = useRef();

  const { camera } = useThree();
  const [front, back, eyes, ring, smoke, boss, tv1, tv2] = useKTX2([
    "/ktx2/obj_building_front.ktx2",
    "/ktx2/obj_building_back.ktx2",
    "/ktx2/light-boss-behind-eyes.ktx2",
    "/ktx2/light-boss-behind.ktx2",
    "/ktx2/background_hitomi.ktx2",
    "/ktx2/obj_boss.ktx2",
    "/ktx2/tv1.ktx2",
    "/ktx2/tv2.ktx2",
  ]);
  const scroll = useScroll();

  useFrame((state, delta) => {
    

    if (scroll.offset * scroll.pages < 12) {
      group.current.position.y = scroll.offset * scroll.pages;
    }
    if (scroll.offset * scroll.pages > 12) {
      easing.damp3(camera.rotation, [0.5, 0, 0], 1, delta);
    } else if (scroll.offset * scroll.pages < 12) {
      easing.damp3(camera.rotation, [0.2, 0, 0], 0.3, delta * 2);
    }
    if (scroll.offset * scroll.pages > 13) {
      easing.damp3(camera.position, [0, 0, 4], 1, delta);
    } else if (scroll.offset * scroll.pages < 13) {
      easing.damp3(camera.position, [0, 0, 5], 0.3, delta * 2);
    }
    if (scroll.offset * scroll.pages > 13) {
      easing.damp3(im.current.rotation, [0.5, 0, 0], 0.5, delta * 2);
      easing.damp3(im.current.scale, [1.5, 1.5, 0], 1, delta);

      easing.damp3(splash1.current.rotation, [0.5, 0, 0], 0.5, delta * 2);
      easing.damp3(splash1.current.scale, [40, 40, 0], 1, delta);

      easing.damp3(splash2.current.rotation, [0.5, 0, 0], 0.5, delta * 2);
      easing.damp3(splash2.current.scale, [4, 4, 0], 1, delta);

      easing.damp3(splash3.current.rotation, [0.5, 0, 3], 0.5, delta * 2);
      easing.damp3(splash3.current.scale, [5, 5, 0], 1, delta);
    } else {
      easing.damp3(im.current.rotation, [0, 0, 0], 0.5, delta * 2);
      easing.damp3(im.current.scale, [0, 0, 0], 0.5, delta * 4);

      easing.damp3(splash1.current.rotation, [0, 0, 0], 0.3, delta * 0.1);
      easing.damp3(splash1.current.scale, [0, 0, 0], 0.3, delta);

      easing.damp3(splash2.current.rotation, [0, 0, 0], 0.1, delta * 2);
      easing.damp3(splash2.current.scale, [0, 0, 0], 0.1, delta);

      easing.damp3(splash3.current.rotation, [0, 0, 3], 0.1, delta * 2);
      easing.damp3(splash3.current.scale, [0, 0, 0], 0.1, delta);
    }

    // if (scroll.offset * scroll.pages > 18) {
    //   easing.damp3(camera.rotation, [0, 0, 0], 0.3, delta * 2);
    //   group.current.position.y = scroll.offset * scroll.pages;
    // }
  });

  return (
    <>
      <group ref={group}>
        <Sprite />
        //* TV
        <mesh
          position={[-1, 3.5, 0]}
          scale={[1, 1, 1]}
          rotation={[0, 0, Math.PI]}
          geometry={geo}
        >
          <meshBasicMaterial map={tv1} transparent opacity={1} />
        </mesh>
        <mesh
          position={[0.5, 4, 0]}
          scale={[2, 2, 1]}
          rotation={[0, 0, Math.PI]}
          geometry={geo}
        >
          <meshBasicMaterial map={tv2} transparent opacity={1} />
        </mesh>
        //* Kimura Sprite
        <SpriteAnimator
          scale={5}
          position={[0, -12, 1]}
          startFrame={0}
          autoPlay={true}
          loop={true}
          numberOfFrames={20}
          alphaTest={0.01}
          fps={10}
          textureImageURL={"/sprites/kimura.webp"}
        />
        //*Boss Sprite
        <mesh
          position={[0, -7.8, -0.7]}
          scale={[4, 8, 1]}
          rotation={[0, 0, Math.PI]}
          geometry={geo}
        >
          <meshBasicMaterial map={boss} transparent opacity={1} />
        </mesh>
        <mesh
          position={[0, -12, -2]}
          scale={[20, 8, 1]}
          rotation={[0, 0, Math.PI]}
          geometry={geo}
        >
          <meshBasicMaterial map={front} transparent opacity={1} />
        </mesh>
        <mesh
          position={[0, -12, -3]}
          scale={[30, 8, 1]}
          rotation={[0, 0, Math.PI]}
        >
          <planeGeometry />
          <meshBasicMaterial
            map={back}
            side={THREE.DoubleSide}
            transparent
            opacity={1}
          />
        </mesh>
        <mesh position={[0, -5, -1]} scale={2} rotation={[Math.PI, 0, 0]}>
          <planeGeometry />
          <meshBasicMaterial
            map={eyes}
            side={THREE.DoubleSide}
            transparent
            opacity={1}
          />
        </mesh>
        <mesh position={[0, -4, -2]} scale={10} rotation={[Math.PI, 0, 0]}>
          <planeGeometry />
          <meshBasicMaterial
            map={ring}
            side={THREE.DoubleSide}
            transparent
            opacity={1}
          />
        </mesh>
        <mesh
          position={[0, -12, -0.5]}
          scale={[20, 10, 1]}
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
        <Image ref={im} url="/cute.png" position={[0, -15, 4]} scale={3} />
        <Image
          ref={splash1}
          url="/main.png"
          position={[0, -11, 4.1]}
          scale={1}
          transparent
        />
        <Image
          ref={splash2}
          url="/left.png"
          position={[-1.7, -12, 4.1]}
          rotation={[0.5, 0, 0]}
          scale={1}
          transparent
        />
        <Image
          ref={splash3}
          url="/left.png"
          position={[2, -10, 3]}
          rotation={[0.5, 0, 3]}
          scale={2}
          transparent
        />
      </group>
      <Scroll html>
        <Overlay />
      </Scroll>
    </>
  );
};

export default ScrollManager;
