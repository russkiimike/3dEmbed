/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 public\models\male-test.glb 
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";

export function Malemodel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./models/male_trainer_blender.glb");
  const { animations } = useGLTF(
    "./models/Alternating_Power_Lunges_modified.glb",
  );
  const { setAnimations, animationIndex } = useCharacterAnimations();
  const { actions, names } = useAnimations(animations, group);

  {
    /* 
  useEffect(() => {
    setAnimations(names);
  }, [names]); 

  useEffect(() => {
    actions[names[animationIndex]].reset().fadeIn(0.5).play();
    return () => {
      actions[names[animationIndex]].fadeOut(0.5);
    };
  }, [animationIndex]);
*/
}
useEffect(() => {
  const playDefaultAnimation = () => {
    const firstAnimationName = Object.keys(actions)[0]
    if (firstAnimationName && actions[firstAnimationName]) {
      actions[firstAnimationName].reset().play()
    }
  }

  if (actions && Object.keys(actions).length > 0) {
    playDefaultAnimation()
  }
}, [actions])

  

  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.hip} />
      <skinnedMesh
        geometry={nodes.Boxers_6921Shape_1.geometry}
        material={materials.MainBoxers}
        skeleton={nodes.Boxers_6921Shape_1.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Boxers_6921Shape_2.geometry}
        material={materials.BoxersTrim}
        skeleton={nodes.Boxers_6921Shape_2.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Boxers_6921Shape_3.geometry}
        material={materials.BoxersWaistband}
        skeleton={nodes.Boxers_6921Shape_3.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Boxers_6921Shape_4.geometry}
        material={materials.Button}
        skeleton={nodes.Boxers_6921Shape_4.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Boxers_6921Shape_5.geometry}
        material={materials.ButtonThread}
        skeleton={nodes.Boxers_6921Shape_5.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Genesis3MaleShape_1.geometry}
        material={materials.Eyelashes}
        skeleton={nodes.Genesis3MaleShape_1.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Genesis3MaleShape_2.geometry}
        material={materials.Fingernails}
        skeleton={nodes.Genesis3MaleShape_2.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Genesis3MaleShape_3.geometry}
        material={materials.Toenails}
        skeleton={nodes.Genesis3MaleShape_3.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Genesis3MaleShape_4.geometry}
        material={materials.Pupils}
        skeleton={nodes.Genesis3MaleShape_4.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Genesis3MaleShape_5.geometry}
        material={materials.Face}
        skeleton={nodes.Genesis3MaleShape_5.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Genesis3MaleShape_6.geometry}
        material={materials.Lips}
        skeleton={nodes.Genesis3MaleShape_6.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Genesis3MaleShape_7.geometry}
        material={materials.Teeth}
        skeleton={nodes.Genesis3MaleShape_7.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Genesis3MaleShape_8.geometry}
        material={materials.Sclera}
        skeleton={nodes.Genesis3MaleShape_8.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Genesis3MaleShape_9.geometry}
        material={materials.Torso}
        skeleton={nodes.Genesis3MaleShape_9.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Genesis3MaleShape_10.geometry}
        material={materials.Ears}
        skeleton={nodes.Genesis3MaleShape_10.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Genesis3MaleShape_11.geometry}
        material={materials.Irises}
        skeleton={nodes.Genesis3MaleShape_11.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Genesis3MaleShape_12.geometry}
        material={materials.Legs}
        skeleton={nodes.Genesis3MaleShape_12.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Genesis3MaleShape_13.geometry}
        material={materials.EyeSocket}
        skeleton={nodes.Genesis3MaleShape_13.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Genesis3MaleShape_14.geometry}
        material={materials.EyeMoisture}
        skeleton={nodes.Genesis3MaleShape_14.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Genesis3MaleShape_15.geometry}
        material={materials.Mouth}
        skeleton={nodes.Genesis3MaleShape_15.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Genesis3MaleShape_16.geometry}
        material={materials.Arms}
        skeleton={nodes.Genesis3MaleShape_16.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Genesis3MaleShape_17.geometry}
        material={materials.Cornea}
        skeleton={nodes.Genesis3MaleShape_17.skeleton}
      />
    </group>
  );
}

export default Malemodel;

useGLTF.preload('./models/male_trainer_blender.glb');
