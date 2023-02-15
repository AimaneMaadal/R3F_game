import * as THREE from 'three'

const boxGeomotry = new THREE.BoxGeometry(1, 1, 1)

function BlockStart({ position = [0, 0, 0]}){
return <group position={ position }>
    <mesh geometry={ boxGeomotry } scale={[ 4, 0.2, 4 ]} position={ [0, -0.1, 0] }>
        <meshStandardMaterial color="orange" />
    </mesh>
</group>
}

export default function Level() {
return <>
    <BlockStart position={ [0, 0, 0] } />
</>
}