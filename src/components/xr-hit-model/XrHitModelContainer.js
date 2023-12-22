import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrHitModel from "./XrHitModel";
import { Text } from "@react-three/drei";
import { rdb } from "../../firebaseConfig";
import { ref,onValue } from 'firebase/database'


const XrHitModelContainer = () => {
  // Set default values for temperature, voltage, current, and output power using useState
  const [voltage, setVoltage]=useState('0');
  const [current, setCurrent]=useState('0');
  const [temperature, setTemperature]=useState('0');
  const [rpm , setRpm]=useState('0');
  
  const [defaultData] = useState({
    temperature: temperature,
    voltage: voltage,
    current: current,
    outputPower: rpm,
  });

  const[data, setData]=useState([]);
  const[changer, setChanger]=useState(0);
  const [rt, setRT]=useState(0)
  useEffect((data)=>{
    console.log('useEffect activated...')
    const fbase = () =>{
      console.log('fbase called...')
      const fetchRef = ref(rdb,'motordat/');
      onValue(fetchRef, (snapshot) =>{
        const adata = snapshot?.val();
        const motorData = Object.keys(adata).map(key => ({
           id: key,
           ...adata[key] 
        }));
        setData(motorData);
    }
  );
  if(data.length === 0){
    setChanger(changer+1)
  }
  if(data.length>0){
    setVoltage(Math.floor(data[0].actualVoltage));
    setCurrent(Math.floor(data[0].actualCurrent));
    setTemperature(Math.floor(data[0].temperature));
    setRpm(Math.floor(data[0].actualRPM));
  }
    }
  fbase();
 
},[changer]);

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
        
          <mesh onClick={() => {setRT(rt+1)}}>
          {/* Add Text components for labels and values */}
          {/* Labels */}
          <Text position={[-0.2, 1.5, 0]} color="black" fontSize={0.14} textAlign="left">
            Voltage: 
          </Text>
          <Text position={[-0.2, 1.3, 0]} color="black" fontSize={0.14} textAlign="left">
            Current: 
          </Text>
          <Text position={[-0.2, 1.1, 0]} color="black" fontSize={0.14} textAlign="left">
            RPM: 
          </Text>
          <Text position={[-0.2, 0.9, 0]} color="black" fontSize={0.14} textAlign="left">
            Temperature: 
          </Text>
          


          {/* Values */}
          
         { data.map(({ item, id }) => {
          return (
            <>
            
          <Text position={[0.5, 1.5, 0]} color="black" fontSize={0.14} textAlign="left">
            {voltage} V
          </Text>
          <Text position={[0.5, 1.3, 0]} color="black" fontSize={0.14} textAlign="left">
            {current} A
          </Text>
          <Text position={[0.5, 1.1, 0]} color="black" fontSize={0.14} textAlign="left">
            {rpm} 
          </Text>
          <Text position={[0.5, 0.9, 0]} color="black" fontSize={0.14} textAlign="left">
            {temperature} °C
          </Text>
          <Text position={[0.5, 0.7, 0]} color="black" fontSize={0.14} textAlign="left">
            
          </Text>
          
          </>
          )
         } )
         }
         </mesh>
        </XR>
      </Canvas>
    </>
  );
};

export default XrHitModelContainer;
