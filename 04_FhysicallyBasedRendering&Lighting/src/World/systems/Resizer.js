class Resizer {
    constructor(container, camera, renderer) {
      // Set the cameras's aspect ratio and update its frustum
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();

      // Update the size of the renderer and its pixelRatio
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
    }
  }
  
export { Resizer };