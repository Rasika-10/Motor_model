// import { Canvas } from "@react-three/fiber";
// import { ARButton,XR } from "@react-three/xr";
// import XrHitModel from "./XrHitModel";

// const XrHitModelContainer = () => {
//   return (
    
//      <>

   
//       <ARButton 
//         sessionInit={{
//           requiredFeatures: ["hit-test"],
//         }}
//       />
//       <Canvas>
//         <XR>
//           <XrHitModel />
//         </XR>
//       </Canvas>
    
//     </>
//   );
// };

// export default XrHitModelContainer;

import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrHitModel from "./XrHitModel";
import { Text } from "@react-three/drei";

const XrHitModelContainer = () => {
  // Set default values for temperature, voltage, current, and output power
  const defaultData = {
    temperature: 25,
    voltage: 120,
    current: 5,
    outputPower: 600,
  };

  return (
    <>
      <ARButton
        sessionInit={{
          requiredFeatures: ["hit-test"],
        }}
      />
      <Canvas>
        <XR>
          {/* Add XrHitModel component with default data */}
          <XrHitModel defaultData={defaultData} />

          {/* Add Text components for labels and values */}
          {/* Labels */}
          <Text position={[2, 1.8, 0]} color="white" fontSize={0.2} textAlign="left">
            Temperature:
          </Text>
          <Text position={[2, 1.5, 0]} color="white" fontSize={0.2} textAlign="left">
            Voltage:
          </Text>
          <Text position={[2, 1.2, 0]} color="white" fontSize={0.2} textAlign="left">
            Current:
          </Text>
          <Text position={[2, 0.9, 0]} color="white" fontSize={0.2} textAlign="left">
            Output Power:
          </Text>

          {/* Values */}
          <Text position={[3, 1.8, 0]} color="white" fontSize={0.2} textAlign="left">
            {defaultData.temperature} °C
          </Text>
          <Text position={[3, 1.5, 0]} color="white" fontSize={0.2} textAlign="left">
            {defaultData.voltage} V
          </Text>
          <Text position={[3, 1.2, 0]} color="white" fontSize={0.2} textAlign="left">
            {defaultData.current} A
          </Text>
          <Text position={[3, 0.9, 0]} color="white" fontSize={0.2} textAlign="left">
            {defaultData.outputPower} W
          </Text>
        </XR>
      </Canvas>
    </>
  );
};

export default XrHitModelContainer;
