// import { OrbitControls } from "@react-three/drei";
// import { useThree } from "@react-three/fiber";
// import { Interactive, useHitTest, useXR } from "@react-three/xr";
// import { useRef, useState } from "react";
// import Model from "./Model";

// const XrHitModel = () => {
//   const reticleRef = useRef();
//   const [models, setModels] = useState([]);

//   const { isPresenting } = useXR();

//   useThree(({ camera }) => {
//     if (!isPresenting) {
//       camera.position.z = 3;
//     }
//   });

//   useHitTest((hitMatrix, hit) => {
//     hitMatrix.decompose(
//       reticleRef.current.position,
//       reticleRef.current.quaternion,
//       reticleRef.current.scale
//     );

//     reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
//   });

//   const placeModel = (e) => {
//     let position = e.intersection.object.position.clone();
//     let id = Date.now();
//     setModels([{ position, id }]);
//   };

//   return (
//     <>
//       <OrbitControls />
//       <ambientLight />
//       {isPresenting &&
//         models.map(({ position, id }) => {
//           return <Model key={id} position={position} />;
//         })}
//       {isPresenting && (
//         <Interactive onSelect={placeModel}>
//           <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
//             <ringGeometry args={[0.1, 0.25, 32]} />
//             <meshStandardMaterial color={"white"} />
//           </mesh>
//         </Interactive>
//       )}

//       {!isPresenting && <Model />}
//     </>
//   );
// };

// export default XrHitModel;



// import { OrbitControls } from "@react-three/drei";
// import { useThree } from "@react-three/fiber";
// import { Interactive, useHitTest, useXR } from "@react-three/xr";
// import { useRef, useState } from "react";
// import Model from "./Model";
// import { Text } from '@react-three/drei';

// const XrHitModel = () => {
//   const reticleRef = useRef();
//   const [models, setModels] = useState([]);

//   const { isPresenting } = useXR();

//   useThree(({ camera }) => {
//     if (!isPresenting) {
//       camera.position.z = 3;
//     }
//   });

//   useHitTest((hitMatrix, hit) => {
//     hitMatrix.decompose(
//       reticleRef.current.position,
//       reticleRef.current.quaternion,
//       reticleRef.current.scale
//     );

//     reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
//   });

//   const placeModel = (e) => {
//     let position = e.intersection.object.position.clone();
//     let id = Date.now();
//     setModels([{ position, id }]);
//   };

//   return (
//     <>
//       <OrbitControls />
//       <ambientLight />
//       {isPresenting &&
//         models.map(({ position, id }) => {
//           return (
//             <group key={id} position={position}>
//               <Model />
//               <Text
//                 position={[0, 1, 0]} // Adjust the position on the motor model
//                 color="black"
//                 fontSize={1.5}
//                 maxWidth={2}
//                 lineHeight={1}
//                 letterSpacing={0.02}
//                 textAlign="center"
//               >
//                 Aurora
//               </Text>
//             </group>
//           );
//         })}
//       {isPresenting && (
//         <Interactive onSelect={placeModel}>
//           <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
//             <ringGeometry args={[0.1, 0.25, 32]} />
//             <meshStandardMaterial color={"white"} />
//           </mesh>
//         </Interactive>
//       )}

//       {!isPresenting && <Model />}
//     </>
//   );
// };

// export default XrHitModel;


import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { useRef, useState, useEffect } from "react";
import Model from "./Model";
import { Text } from '@react-three/drei';

const XrHitModel = () => {
  const reticleRef = useRef();
  const [models, setModels] = useState([]);
  const [data, setData] = useState(null);

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

  const fetchData = async () => {
    // Fetch data (e.g., from your API or Firebase)
    // For demonstration purposes, I'll use a placeholder object
    const placeholderData = {
      temperature: 25,
      voltage: 120,
      current: 5,
      outputPower: 600,
    };

    setData(placeholderData);
  };

  // Fetch data on component mount
  useEffect(() => {
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
                <group position={[0, 2, 0]} rotation={[0, Math.PI / 2, 0]}>
                  {/* Table */}
                  <mesh>
                    <boxGeometry args={[4, 0.1, 2]} />
                    <meshStandardMaterial color="gray" />
                  </mesh>

                  {/* Labels */}
                  <Text position={[-1.5, 0.2, -0.8]} color="white" fontSize={0.2} textAlign="left">
                    Temperature:
                  </Text>
                  <Text position={[-1.5, 0.2, 0]} color="white" fontSize={0.2} textAlign="left">
                    Voltage:
                  </Text>
                  <Text position={[-1.5, 0.2, 0.8]} color="white" fontSize={0.2} textAlign="left">
                    Current:
                  </Text>
                  <Text position={[0.5, 0.2, -0.8]} color="white" fontSize={0.2} textAlign="left">
                    Output Power:
                  </Text>

                  {/* Values */}
                  <Text position={[-0.5, 0.2, -0.8]} color="white" fontSize={0.2} textAlign="left">
                    {data.temperature} °C
                  </Text>
                  <Text position={[-0.5, 0.2, 0]} color="white" fontSize={0.2} textAlign="left">
                    {data.voltage} V
                  </Text>
                  <Text position={[-0.5, 0.2, 0.8]} color="white" fontSize={0.2} textAlign="left">
                    {data.current} A
                  </Text>
                  <Text position={[1.5, 0.2, -0.8]} color="white" fontSize={0.2} textAlign="left">
                    {data.outputPower} W
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
