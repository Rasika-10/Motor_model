import { Canvas } from "@react-three/fiber";
import { ARButton,VRButton ,XR } from "@react-three/xr";
import XrHitModel from "./XrHitModel";

const XrHitModelContainer = () => {
  return (
    
     <>

   
      <ARButton 
        sessionInit={{
          requiredFeatures: ["hit-test"],
        }}
      />
      <Canvas>
        <XR>
          <XrHitModel />
        </XR>
      </Canvas>
    
    </>
  );
};

export default XrHitModelContainer;


