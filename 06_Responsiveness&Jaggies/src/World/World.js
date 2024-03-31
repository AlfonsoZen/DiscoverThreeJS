import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createRing } from './components/ring.js';
import { createScene } from './components/scene.js';
import { createLigths } from './components/lights.js';

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
        
        const cube = createCube();
        const ring = createRing();
        const light = createLigths();
        
        this.container.append(this.#renderer.domElement);
        this.#scene.add(cube, ring, light);

        const resizer = new Resizer(this.container, this.#camera, this.#renderer);
        resizer.onResize = () => {
            this.render();
        }
    };
    
    render() {


        this.#renderer.render(this.#scene, this.#camera);
    };
}

export { World };