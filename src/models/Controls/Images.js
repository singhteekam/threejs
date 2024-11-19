import { Image, useScroll } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";

import jpg1 from "./../../assets/scrollimages/1.jpg";
import jpg2 from "./../../assets/scrollimages/2.jpg";
import jpg3 from "./../../assets/scrollimages/3.jpg";
import jpg4 from "./../../assets/scrollimages/4.jpg";
import jpg5 from "./../../assets/scrollimages/5.jpg";
import jpg6 from "./../../assets/scrollimages/6.jpg";

const Images = () => {
  const { width, height } = useThree((state) => state.viewport);
  const scroll = useScroll();
  const groupRef = useRef();

  useFrame(() => {
    groupRef.current.children[0].material.zoom = 1 + scroll.range(0, 1 / 3) / 3;
    groupRef.current.children[1].material.zoom = 1 + scroll.range(1 / 3, 1 / 3);
    groupRef.current.children[2].material.zoom = 1 + scroll.range(1 / 3, 1 / 3);
    groupRef.current.children[3].material.zoom = 1 + scroll.range(1 / 3, 1 / 3);
    groupRef.current.children[4].material.zoom =
      1 + scroll.range(2 / 3, 1 / 3) / 3;
    groupRef.current.children[4].material.grayscale =
      1 - scroll.range(2 / 3, 1 / 3);
    groupRef.current.children[5].material.zoom = 2 - scroll.range(2 / 3, 1 / 3);

    console.log(scroll.range(0, 0.33));
  });

  return (
    <group ref={groupRef}>
      <Image
        url={jpg1}
        scale={[4, height, 1]}
        position={[-2, 0, 0]}
        grayscale={0}
        zoom={1}
      />
      <Image
        position={[-2.3, -height, 2]}
        scale={[1, 3, 1]}
        url={jpg2}
      />
      <Image
        position={[-0.6, -height, 3]}
        scale={[1, 2, 1]}
        url={jpg3}
      />
      <Image position={[0.75, -height, 3.5]} scale={1.5} url={jpg4} />
      <Image
        position={[0, -height * 1.5, 2.5]}
        scale={[1.5, 3, 1]}
        url={jpg5}
        grayscale={1}
      />
      <Image
        position={[0, -height * 2 - height / 4, 0]}
        scale={[width, height / 2, 1]}
        url={jpg6}
      />
    </group>
  );
};

export default Images;
