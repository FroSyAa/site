'use client'

import { useGLTF } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useMemo, useRef } from "react"
import { Mesh, MeshStandardMaterial, Object3D, Vector3, type Group } from "three"

const MODEL_PATH = '/3D-models/MinecraftHead.glb'

export default function MinecraftHead() {
    const { scene } = useGLTF(MODEL_PATH)
    const model = useMemo(() => scene.clone(true), [scene])
    const modelRef = useRef<Group>(null!)
    const { camera } = useThree()

    useEffect(() => {
        model.traverse((child) => {
            if (!(child instanceof Mesh)) return

            child.castShadow = true
            child.receiveShadow = true

            const materials = Array.isArray(child.material) ? child.material : [child.material]

            materials.forEach((material) => {
                if (!(material instanceof MeshStandardMaterial)) return

                material.transparent = false
                material.alphaTest = 0.5
                material.depthWrite = true
                material.depthTest = true
                material.roughness = 1
                material.metalness = 0
                material.polygonOffset = true
                material.polygonOffsetFactor = -1
                material.polygonOffsetUnits = -1

                if (material.map) {
                    material.map.anisotropy = 8
                    material.map.needsUpdate = true
                }
            })
        })
    }, [model])

    useFrame((state) => {
        if (!modelRef.current) return

        const vector = new Vector3(state.mouse.x * -1, state.mouse.y * -1, 0.75)
        vector.unproject(camera)
        vector.lerp(camera.position, 75)

        const dummy = new Object3D()
        dummy.position.copy(modelRef.current.position)
        dummy.lookAt(vector)

        modelRef.current.quaternion.slerp(dummy.quaternion, 0.4)
    })

    return <primitive object={model} ref={modelRef} scale={5.0} />
}

useGLTF.preload(MODEL_PATH)