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

  geometry = new THREE.BoxGeometry( 1, 1, 1 );
  material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 5;


  controls = new THREE.OrbitControls( camera, renderer.domElement );
  //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
  controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
  controls.dampingFactor = 0.25;
  controls.screenSpacePanning = false;
  controls.minDistance = 2;
  controls.maxDistance = 10;
  controls.maxPolarAngle = Math.PI / 2;
}

function animate() {
  requestAnimationFrame( animate );
  cube.rotation.x += 0.005;
  cube.rotation.y += 0.005;
  renderer.render( scene, camera );
}

init();
animate();