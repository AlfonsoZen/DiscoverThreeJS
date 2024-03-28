import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createRing } from './components/ring.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

class World {
    #camera;
    #renderer;
    #scene;
    
    constructor(container) {
        this.#camera = createCamera();
        this.#renderer = createRenderer();
        this.#scene = createScene();
        this.container = container;

        container.append(this.#renderer.domElement);

        const cube = createCube();
        this.#scene.add(cube);

        const cube2 = createRing();
        this.#scene.add(cube2);

    };
    
    render() {
        const resizer = new Resizer(this.container, this.#camera, this.#renderer);
        this.#renderer.render(this.#scene, this.#camera);
    };
}

export { World };