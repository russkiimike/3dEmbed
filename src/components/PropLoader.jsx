import React, { useRef, useEffect } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const PropLoader = ({ modelPath, modelType }) => {
  const propRef = useRef();
  const { scene } = useThree();

  // Load the model with the appropriate loader
  const model = useLoader(
    modelType === 'glb' ? GLTFLoader : FBXLoader,
    modelPath
  );

  useEffect(() => {
    // Ensure the model is attached to the specified object in the scene
    requestAnimationFrame(() => {
      const rightHand = scene.getObjectByName('mixamorigLeftHand');
      if (rightHand && propRef.current) {
        rightHand.add(propRef.current);
      }
    });
  }, [scene]);

  return (
    <group ref={propRef} position={[0, 0, 0]} scale={[40, 40, 40]}>
      {/* Ensure compatibility with both GLTF and FBX models */}
      {modelType === 'glb' ? (
        <primitive object={model.scene} />
      ) : (
        <primitive object={model} />
      )}
      {/* Commented-out placeholder box */}
      {/*
      <mesh castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#FFF" metalness={0.8} roughness={0.2} />
      </mesh>
      */}
    </group>
  );
};

export default PropLoader;
