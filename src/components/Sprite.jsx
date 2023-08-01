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
        texture={"/sprites/nakamura.webp"}
        scale={1.5}
        position={[2, -5, 2]}
      />
      <SpriteConfig
        texture={"/sprites/kodera.webp"}
        scale={1.5}
        position={[-2, -3, 2]}
      />
    </>
  );
};

export default Sprite;
