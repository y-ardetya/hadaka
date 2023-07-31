import { SpriteAnimator, useKTX2, useScroll } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";

const geo = new THREE.PlaneGeometry();

const City = () => {
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
  const group = useRef();
  const planeRef = useRef();

  return (
    <>
      
      <group position={[0, 2, 0]}>
        <mesh
          position={[-1, 1.5, 0]}
          scale={[1, 1, 1]}
          rotation={[0, 0, Math.PI]}
          geometry={geo}
        >
          <meshBasicMaterial map={tv1} transparent opacity={1} />
        </mesh>
        <mesh
          position={[0.5, 2, 0]}
          scale={[2, 2, 1]}
          rotation={[0, 0, Math.PI]}
          geometry={geo}
        >
          <meshBasicMaterial map={tv2} transparent opacity={1} />
        </mesh>
      </group>
      <group position={[0, -7, 0]} rotation={[0, 0, 0]} ref={group}>
        <SpriteAnimator
          scale={7}
          position={[0, -34, 0]}
          startFrame={0}
          autoPlay={true}
          loop={true}
          numberOfFrames={20}
          alphaTest={0.01}
          fps={10}
          textureImageURL={"/kimura.webp"}
        />

        <mesh
          position={[0, -30, -0.5]}
          scale={[5, 9, 1]}
          rotation={[0, 0, Math.PI]}
          geometry={geo}
        >
          <meshBasicMaterial map={boss} transparent opacity={1} />
        </mesh>
        <mesh
          position={[0, -33, -1.2]}
          scale={[20, 10, 1]}
          rotation={[0, 0, Math.PI]}
          geometry={geo}
        >
          <meshBasicMaterial map={front} transparent opacity={1} />
        </mesh>
        <mesh
          position={[0, -33, -1.3]}
          scale={[30, 15, 1]}
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

        <mesh position={[0, -25, -3]} scale={2} rotation={[Math.PI, 0, 0]}>
          <planeGeometry />
          <meshBasicMaterial
            map={eyes}
            side={THREE.DoubleSide}
            transparent
            opacity={1}
          />
        </mesh>
        <mesh position={[0, -25, -5]} scale={20} rotation={[Math.PI, 0, 0]}>
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
      </group>
    </>
  );
};

export default City;
