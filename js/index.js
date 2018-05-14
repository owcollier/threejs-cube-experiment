'use strict';

let scene, camera, controls, renderer;

let geometry, material;

let cube;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  let verticesOfCube = [
    -1, -1, -1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
    -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
  ];

  let indicesOfFaces = [
    2,1,0,    0,3,2,
    0,4,7,    7,3,0,
    0,1,5,    5,4,0,
    1,2,6,    6,5,1,
    2,3,7,    7,6,2,
    4,5,6,    6,7,4
  ];

  geometry = new THREE.PolyhedronGeometry( verticesOfCube, indicesOfFaces, 6, 4 );
  material = new THREE.MeshNormalMaterial( { flatShading: false , wireframe: true } );
  cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

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
  cube.rotation.x += 0.002;
  cube.rotation.y += 0.002;
  renderer.render( scene, camera );
}

init();
animate();