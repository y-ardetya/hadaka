import { SpriteAnimator } from "@react-three/drei";

const SpriteConfig = ({ texture, position, scale }) => {
  return (
    <SpriteAnimator
      scale={scale}
      position={position}
      startFrame={0}
      autoPlay={true}
      loop={true}
      numberOfFrames={20}
      alphaTest={0.01}
      fps={10}
      textureImageURL={texture}
    />
  );
};

const Sprite = () => {
  return (
    <>
      <SpriteConfig
        texture={"/nakamura.webp"}
        scale={5}
        position={[10, 0, 0]}
      />
      <SpriteConfig texture={"/kodera.webp"} scale={5} position={[-10, 0, 0]} />
    </>
  );
};

export default Sprite;
