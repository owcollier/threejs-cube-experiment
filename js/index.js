'use strict';

let scene, camera, controls, renderer;

let material, object;

function generateGeometry() {

  return new THREE.TetrahedronGeometry();

}

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  // const verticesOfCube = [
  //   -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
  //   -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
  // ];

  // const indicesOfFaces = [
  //   2,1,0,    0,3,2,
  //   0,4,7,    7,3,0,
  //   0,1,5,    5,4,0,
  //   1,2,6,    6,5,1,
  //   2,3,7,    7,6,2,
  //   4,5,6,    6,7,4
  // ];

  // geometry = new THREE.PolyhedronGeometry( verticesOfCube, indicesOfFaces, 6,  2);
  material = new THREE.MeshNormalMaterial( { flatShading: false , wireframe: true } );
  object = new THREE.Mesh( generateGeometry(), material );
  scene.add( object );

  camera.position.z = 15;


  controls = new THREE.OrbitControls( camera, renderer.domElement );
  //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
  controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
  controls.dampingFactor = 0.25;
  controls.enablePan = false;
  controls.minDistance = 15;
  controls.maxDistance = 100;
  controls.maxPolarAngle = Math.PI / 2;
}

function animate() {
  requestAnimationFrame( animate );
  object.rotation.x += 0.002;
  object.rotation.y += 0.002;
  renderer.render( scene, camera );
}

init();
animate();