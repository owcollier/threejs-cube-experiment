'use strict';

let scene, camera, controls, renderer;

let material, object, geometry;

const vertices = [[0,0,1.224745],[1.154701,0,0.4082483],[-0.5773503,1,0.4082483],[-0.5773503,-1,0.4082483],[0.5773503,1,-0.4082483],[0.5773503,-1,-0.4082483],[-1.154701,0,-0.4082483],[0,0,-1.224745]];

const indices = [[0,1,4,2],[0,2,6,3],[0,3,5,1],[1,5,7,4],[2,4,7,6],[3,6,7,5]];

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  geometry = new THREE.PolyhedronGeometry( vertices, indices, 6, 0);
  material = new THREE.MeshNormalMaterial( { flatShading: false , wireframe: true } );
  object = new THREE.Mesh( geometry, material );
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