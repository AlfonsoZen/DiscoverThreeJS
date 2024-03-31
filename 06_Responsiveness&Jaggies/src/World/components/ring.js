import { Mesh, MeshStandardMaterial, RingGeometry } from 'three';

function createRing() {
    const material = new MeshStandardMaterial({ color: 'purple' });

    const ring = new RingGeometry(1.45, 1.8, 7, 1, 0, Math.PI * 4);

    const mesh = new Mesh(ring, material);
   
    mesh.rotation.set(-1, -0.1, 0.8);

    return mesh;
}

export { createRing };