import { Mesh, MeshBasicMaterial, RingGeometry } from 'three';

function createRing() {
    const material = new MeshBasicMaterial();

    const ring = new RingGeometry(1, 1.3, 7);

    const mesh = new Mesh(ring, material);

    return mesh;
}

export { createRing };