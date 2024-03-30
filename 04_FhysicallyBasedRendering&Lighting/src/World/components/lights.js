import { DirectionalLight } from "three";

function createLigths() {
    /** Directional Light:
     * There are two types of lights in three.js:
     * - Direct lights
     * - Ambient (indirect) lights
     * Due to the complexity of ambient lights, let's focus on Direct lights, which comes with 4 classes:
     * 1. DirectionalLight => Sunlight
     * 2. PointLight => Light Bulbs
     * 3. ReactAreaLight => Strip lighting or bright windows
     * 4. SpotLight => Spotlights
     * The DirectionalLight is designed to mimic a distant source of light such as the sun. Light rays from a DirectionalLight don’t fade with distance.
     */

    // The DirectionalLight constructor takes two parameters, color, and intensity
    const light = new DirectionalLight('white', 8);

    light.position.set(10, 10, 10);

    return light;
}

export { createLigths };