

// import React, { useRef, useState } from "react";
// import { useGLTF} from "@react-three/drei";
// import * as THREE from 'three';

// export default function Model(props) {
//   const group = useRef();
//   const { nodes, materials } = useGLTF("/electric_motor.glb");
//   // const { actions } = useAnimations(animations, group);

//   const [temperature] = useState(20); // Initial temperature

//   // Set up materials with enhanced shading properties
//   materials.parts.color.set("0xffffff"); // Change to white
//   materials.closingParts.color.set("#0000ff"); // Change to black

//   // Adjust shading properties for a more vibrant 3D effect
//   materials.parts.metalness = 0.8; // Increase metalness for a shiny effect
//   materials.parts.roughness = 0.1; // Decrease roughness for a glossy effect

//   materials.closingParts.metalness = 0.8;
//   materials.closingParts.roughness = 0.1;

//   // Function to update the temperature and simulate overheating
  

//   // Function to determine color based on temperature
//   const getBodyColor = () => {
//     if (temperature < 50) {
//       return new THREE.Color(0.6, 0.8, 1).multiplyScalar(3); // Enhance blue color
//     } else if (temperature >= 50 && temperature <= 100) {
//       const t = (temperature - 50) / 50; // Normalize temperature between 50 and 100
//       return new THREE.Color(0.9, t * 0.5, 0).multiplyScalar(1.5); // Enhance red color
//     } else {
//       // Dark red with orange and yellow tones, highlighted
//       return new THREE.Color(1, 0, 0).multiplyScalar(1.2).add(new THREE.Color(1, 0.9, 0.5).multiplyScalar(0.6));
//     }
//   };

//   // Set up the body material with dynamic color based on temperature
//   materials.body.color.copy(getBodyColor());

//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group rotation={[-Math.PI / 2, 0, 0]}>
//         <group rotation={[Math.PI / 2, 0, 0]}>
//           {/* Motor model */}
//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.defaultMaterial.geometry}
//             material={materials.body}
           
//           />
//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.defaultMaterial_1.geometry}
//             material={materials.parts}
//           />
//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.defaultMaterial_2.geometry}
//             material={materials.closingParts}
//           />
//         </group>
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("/electric_motor.glb");



import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/electric_motor.glb");

  const [temperature] = useState(70); // Initial temperature

  // Set up materials with enhanced shading properties
  materials.parts.color.set("0xffffff"); // Change to white
  materials.closingParts.color.set("#CCCCCC"); // Change to black

  // Adjust shading properties for a more vibrant 3D effect
  materials.parts.metalness = 0.8; // Increase metalness for a shiny effect
  materials.parts.roughness = 0.1; // Decrease roughness for a glossy effect

  materials.closingParts.metalness = 0.8;
  materials.closingParts.roughness = 0.1;

  // Function to determine color based on temperature
  const getBodyColor = () => {
    if (temperature <= 30) {
      return new THREE.Color(0.3, 0.8, 1).multiplyScalar(3); // Blue
    } else if (temperature <= 50) {
      return new THREE.Color(0.69, 0.88, 0.9).multiplyScalar(3); // Powder Blue
    } else if (temperature <= 80) {
      return new THREE.Color(0.56, 0.93, 0.56).multiplyScalar(3); // Light Green
    }else if (temperature <= 110) {
      return new THREE.Color(0xf4c430).multiplyScalar(3); // Yellow (#f4c430)
    }
     else {
      return new THREE.Color(0.55, 0, 0).multiplyScalar(3); // Dark Red
    }
  };

  // Set up the body material with dynamic color based on temperature
  materials.body.color.copy(getBodyColor());

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          {/* Motor model */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.body}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.parts}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.closingParts}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/electric_motor.glb");
