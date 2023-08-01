import Overlay from "./Overlay";
import Sprite from "./Sprite";
import City from "./City";
import { Scroll } from "@react-three/drei";



const Scroller = () => {
 

  return (
    <>
     
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
        <mesh theatreKey="Plane" position={[0, -40, 0]}>
          <planeGeometry />
          <meshBasicMaterial color="orange" />
        </mesh>
      </Scroll>
    </>
  );
};

export default Scroller;
