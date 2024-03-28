import { Mesh, BoxGeometry, MeshBasicMaterial } from 'three';

function createCube() {
    const geometry = new BoxGeometry(1, 1, 1);
    
    const material = new MeshBasicMaterial();

    const mesh = new Mesh(geometry, material);

    return mesh;
}

export { createCube };