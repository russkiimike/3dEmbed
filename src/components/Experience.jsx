import { OrbitControls } from '@react-three/drei';
import Woman from './Woman';
import PropLoader from './PropLoader';
import Trainer from './Trainer';

const Experience = () => {
  return (
    <>
      <color attach="background" args={['#222222']} />
      <fog attach="fog" args={['#111111', 5, 20]} />

      <OrbitControls />
      <ambientLight intensity={1} />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        intensity={0.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Podium */}
      <mesh position={[0, -0.3, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.5, 1.6, 0.4, 32]} />
        <meshStandardMaterial color="#222222" />
      </mesh>

      {/* Character with Prop */}
      <group position={[0, 0, 0]}>
        <Trainer />
        <PropLoader modelPath="./models/Barbell.glb" modelType="glb" />
      </group>

      {/* Floor */}
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#111111" />
      </mesh>
    </>
  );
};

export default Experience;
