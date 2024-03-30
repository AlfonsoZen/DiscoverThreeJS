import { Mesh, BoxGeometry, MeshStandardMaterial } from 'three';

function createCube() {
    const geometry = new BoxGeometry(1, 1, 1);
    
    const material = new MeshStandardMaterial({ color: 'orchid' });

    const mesh = new Mesh(geometry, material);

    mesh.rotation.set(-0.5, -0.1, 0.8);

    return mesh;
}

export { createCube };