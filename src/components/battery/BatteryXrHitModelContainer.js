import { Canvas } from "@react-three/fiber";
import { ARButton,XR } from "@react-three/xr";
import BatteryXrHitModel from "./BatteryXrHitModel";

const BatteryXrHitModelContainer = () => {
  return (
    
     <>

   
      <ARButton 
        sessionInit={{
          requiredFeatures: ["hit-test"],
        }}
      />
      <Canvas>
        <XR>
          <BatteryXrHitModel />
        </XR>
      </Canvas>
    
    </>
  );
};

export default BatteryXrHitModelContainer;


