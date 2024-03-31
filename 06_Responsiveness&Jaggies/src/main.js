import { World } from "./World/World";

function startRendering() {
    // Get a reference to the container element
    const container = document.getElementById('scene-container');

    // 1. Create an instance of the World App
    const world = new World(container);

    // 2. Render the scene
    world.render();
}

function delayRendering() {
    const button = document.getElementById('delayRendering');

    button.addEventListener( 'click', () => {
        startRendering();
        button.remove();
    })
}

function main() {
    startRendering();
}

main();
