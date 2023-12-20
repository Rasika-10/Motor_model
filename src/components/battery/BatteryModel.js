import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function BatteryModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/battery.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="c4d57a97cb5041e9b66edb297aee38fffbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.025}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Object001"
                  position={[-3.316, 5.218, 1.381]}
                  scale={0.103}
                >
                  <group
                    name="Object_5"
                    position={[-373.449, -75.894, -853.582]}
                  >
                    <mesh
                      name="Object001_02_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object001_02_-_Default_0"].geometry}
                      material={materials["02_-_Default"]}
                    />
                  </group>
                </group>
                <group
                  name="Object002"
                  position={[-3.316, 5.218, 1.381]}
                  scale={0.103}
                >
                  <group
                    name="Object_8"
                    position={[-373.449, -75.894, -853.582]}
                  >
                    <mesh
                      name="Object002_02_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object002_02_-_Default_0"].geometry}
                      material={materials["02_-_Default"]}
                    />
                    <mesh
                      name="Object002_02_-_Default_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object002_02_-_Default_0_1"].geometry}
                      material={materials["02_-_Default"]}
                    />
                  </group>
                </group>
                <group
                  name="Object003"
                  position={[-3.316, 5.218, 1.381]}
                  scale={0.103}
                >
                  <group
                    name="Object_12"
                    position={[-373.449, -75.894, -853.582]}
                  >
                    <mesh
                      name="Object003_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object003_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                    />
                    <mesh
                      name="Object003_01_-_Default_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object003_01_-_Default_0_1"].geometry}
                      material={materials["01_-_Default"]}
                    />
                  </group>
                </group>
                <group
                  name="Torus011"
                  position={[-3.332, 13.973, 2.296]}
                  rotation={[-Math.PI / 2, 0, -1.811]}
                  scale={0.962}
                >
                  <group name="Object_16" position={[-2.649, 10.835, 0.184]}>
                    <mesh
                      name="Torus011_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Torus011_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                    />
                    <mesh
                      name="Torus011_01_-_Default_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes["Torus011_01_-_Default_0_1"].geometry}
                      material={materials["01_-_Default"]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/battery.glb");





