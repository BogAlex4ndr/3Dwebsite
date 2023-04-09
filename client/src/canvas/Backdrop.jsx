import React, { useRef } from 'react';

import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();
  const isMobile = window.innerWidth <= 600;
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={isMobile ? 3 : 30}
      alphaTest={0.85}
      scale={5}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.15]}
      color='#7B5FFD'>
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.25}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={6}
        intensity={0.25}
        ambient={0.35}
        position={[-5, 5, -10]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
