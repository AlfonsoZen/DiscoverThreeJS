import { WebGLRenderer } from 'three';

function createRenderer() {
    const renderer = new WebGLRenderer();

    /** Physically Correct Lighting
     * Physically correct lighting means calculating how light fades with distance from a light source (attenuation) using real-wolrd physics equations.
     */
    renderer.physicallyCorrectLights = true;

    return renderer;
}

export { createRenderer };