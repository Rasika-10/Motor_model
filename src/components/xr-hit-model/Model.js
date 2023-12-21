import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three';
import { rdb } from "../../firebaseConfig";
import { ref,onValue } from 'firebase/database'

export default function Model(props) {

  const [data, setData] = useState([]);
  const group = useRef();
  const { nodes, materials } = useGLTF("/electric_motor.glb");
  const [temperature, setTemperature]=useState('20');
  const [changer, setChanger]=useState(0);

  // Set up materials with enhanced shading properties
  materials.parts.color.set("#ffffff"); // Change to white
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



  useEffect(()=>{
    const fetchRef = ref(rdb,'motordat/');
    onValue(fetchRef, (snapshot) =>{
      const adata = snapshot?.val();
      const motorData = Object.keys(adata).map(key => ({
         id: key,
         ...adata[key] 
      }));
      setData(motorData);
      // if(data.length==0){
      //   setChanger(changer+1);
      // }
       if(data.length>0){
        setTemperature(data[0].temperature)
        setChanger(changer+1);
      }
      else {
        setChanger(changer+1);
      }
  }
    
  );

},[changer,data]);



  return (
    <group ref={group} {...props} dispose={null}>
     <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.55,0.55,0.55]} > {/* Adjust the scale as needed */}
      <group rotation={[Math.PI / 2, 0, 0]} >
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




