// Get a reference to the container element that will hold our scene
const container = document.querySelector('#scene-container');

/** The Scene
 * The scene is a holder for everything we can see. You can think of it as a “tiny universe” in which all your 3D objects live.
 * The scene defines a coordinate system called World Space
*/
import { Scene, Color } from 'three';

const scene = new Scene();

scene.background = new Color('skyblue');


/** The Camera
 * The camera allows us to see the Scene, using techniques called projections.
 * There are several types of projections:
 * - Perspective projection. Which is designed to match the way our eyes see the world by using the 'PerspectiveCamera'
 * - Orthographic projection. It's useful for creating 2D scenes or user interfaces that overlay a 3D scene. It can be accessed by using the 'OrthographicCamera';
 */
import { PerspectiveCamera } from 'three';

const fov = 35; // Field of view 
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // The near clipping plane
const far = 100 // The far clipping plane 

const camera = new PerspectiveCamera(fov, aspect, near, far);

camera.position.set(0,0,10)


/** The Renderer
 * The renderer draws what its seen by the camera onto a <canvas>. This proccess is called rendering, and the resulting picture is a render.
 * We'll mostly use the 'WebGLRenderer' which renders our scenes using WebGL2
 */
import { WebGLRenderer } from 'three';

const renderer = new WebGLRenderer();

renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio)


/** The Mesh
 * Meshes are the most common kind of visible object used in 3D computer graphics.
 * There are other kinds of visible objects, such as lines, and shapes, and sprites, and particles, and so on...
 * The Mesh constructor takes two parameters: a geometry and a material.
 */
import { Mesh } from 'three';

/** The Geometry
 * The geometry defines the shape of the mesh.
 * The kind of geometry used here is called a 'BuggerGeometry'
 */
import { BoxGeometry } from 'three';

const length = 2;
const width = 2;
const depth = 2;

const geometry = new BoxGeometry(length, width, depth);

/** The Material
 * The material defines how the surface of the mesh looks. 
 * The kind of material used here is called 'MeshBasicMaterial'
 */
import { MeshBasicMaterial } from 'three';

const material = new MeshBasicMaterial();

// Create a Mesh containing the geometry and material
const cube = new Mesh(geometry, material);

// Add the mesh to the scene
scene.add(cube);

// add the automatically created <canvas> element to the page
container.append(renderer.domElement);

// render, or 'create a still image', of the scene
renderer.render(scene, camera);