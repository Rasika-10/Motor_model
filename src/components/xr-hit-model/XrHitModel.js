


import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { useRef, useState, useEffect } from "react";
import Model from "./Model";
import { Text } from "@react-three/drei";

const XrHitModel = () => {
  const reticleRef = useRef();
  const [models, setModels] = useState([]);
  const [data, setData] = useState({
    temperature: 25,
    voltage: 120,
    current: 5,
    outputPower: 600,
  });

  const { isPresenting } = useXR();

  useThree(({ camera }) => {
    if (!isPresenting) {
      camera.position.z = 3;
    }
  });

  useHitTest((hitMatrix, hit) => {
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale
    );

    reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
  });

  const placeModel = (e) => {
    let position = e.intersection.object.position.clone();
    let id = Date.now();
    setModels([{ position, id }]);
  };

  useEffect(() => {
    // Simulate fetching data from Firebase or other sources
    const fetchData = async () => {
      // For demonstration purposes, use a timeout to mimic an async operation
      setTimeout(() => {
        setData({
          temperature: 25,
          voltage: 120,
          current: 5,
          outputPower: 600,
        });
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <>
      <OrbitControls />
      <ambientLight />
      {isPresenting &&
        models.map(({ position, id }) => {
          return (
            <group key={id} position={position}>
              <Model />
              {data && (
                <group position={[0, 2, 0]} rotation={[0, -Math.PI / 2, 0]}>
                  {/* Outer Border */}
                  <mesh>
                    <boxGeometry args={[2.9, 1.4, 0.2]} />
                    <meshStandardMaterial color="black" transparent opacity={0.5} />
                  </mesh>
                  
                  {/* Text Labels and Values */}
                  <Text position={[0, 0.7, 0]} color="white" fontSize={0.2} textAlign="center">
                    Temperature:{data?.temperature} °C
                  </Text>
                  <Text position={[0, 0.5, 0]} color="white" fontSize={0.2} textAlign="center">
                    Voltage: {data?.voltage} V
                  </Text>
                  <Text position={[0, 0.3, 0]} color="white" fontSize={0.2} textAlign="center">
                    Current: {data?.current} A
                  </Text>
                  <Text position={[0, 0.1, 0]} color="white" fontSize={0.2} textAlign="center">
                    Output Power:{data?.outputPower} W
                  </Text>

                </group>
              )}
            </group>
          );
        })}
      {isPresenting && (
        <Interactive onSelect={placeModel}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color={"white"} />
          </mesh>
        </Interactive>
      )}

      {!isPresenting && <Model />}
    </>
  );
};

export default XrHitModel;
