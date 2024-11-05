import React from "react";

const Podium = () => {
  return (
    <group>
      {/* Main cylinder podium */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.5, 2, 1, 32]} />
        <meshStandardMaterial 
          color="#1a1a1a"
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>
      
      {/* Top rim highlight */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <torusGeometry args={[1.5, 0.05, 16, 32]} />
        <meshStandardMaterial 
          color="#333333"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      
      {/* Bottom rim highlight */}
      <mesh position={[0, -0.5, 0]} castShadow>
        <torusGeometry args={[2, 0.05, 16, 32]} />
        <meshStandardMaterial 
          color="#333333"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
};

export default Podium;