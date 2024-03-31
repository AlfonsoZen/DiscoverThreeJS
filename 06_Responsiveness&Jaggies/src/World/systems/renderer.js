import { WebGLRenderer } from 'three';

function createRenderer() {
    /** Anti-Aliasing (AA)
     * We can turn on anti-aliasing by passing a single new parameter into the WebGLRenderer constructor:
     */
    const renderer = new WebGLRenderer({ antialias: true });

    /** Physically Correct Lighting
     * Physically correct lighting means calculating how light fades with distance from a light source (attenuation) using real-wolrd physics equations.
     */
    renderer.physicallyCorrectLights = true;

    return renderer;
}

export { createRenderer };