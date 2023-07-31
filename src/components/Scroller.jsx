import Overlay from "./Overlay";
import Sprite from "./Sprite";
import City from "./City";
import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useCurrentSheet, PerspectiveCamera, editable as e } from "@theatre/r3f";
import { val } from "@theatre/core";


const Scroller = () => {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  return (
    <>
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 0, 5]}
        rotation={[0.2, 0, 0]}
        fov={75}
        near={0.1}
        far={1000}
      />
      <Scroll html>
        <Overlay />
      </Scroll>
      <Scroll>
        <Sprite />
      </Scroll>
      <Scroll>
        <City />
      </Scroll>
      <Scroll>
        <e.mesh theatreKey="Plane" position={[0, -40, 0]}>
          <planeGeometry />
          <meshBasicMaterial color="orange" />
        </e.mesh>
      </Scroll>
    </>
  );
};

export default Scroller;
