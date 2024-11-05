import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Interface from "./components/Interface";

function App() {
  return (
    <>
      <Canvas camera={{ position: [1, 2, 4], fov: 50 }} shadows>
        <Experience />
      </Canvas>
      <Interface />
    </>
  );
}

export default App;