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
    -0.980376,-0.197048,-0.005857, -0.946332,0.150802,-0.285858, -0.935804,0.079716,0.34339, -0.901759,0.427566,0.063389, -0.812124,-0.53251,0.23851, -0.8048,-0.555655,-0.20867, -0.767552,-0.255746,0.587757, -0.759203,0.553784,-0.341957, -0.749715,0.007177,-0.661721, -0.688108,0.168923,0.705672, -0.662244,-0.429437,-0.614016, -0.633023,0.731755,0.252621, -0.562586,0.41016,-0.71782, -0.500979,0.571905,0.649573, -0.490467,0.857973,-0.152725, -0.483464,-0.835984,0.259599, -0.47614,-0.859129,-0.18758, -0.411344,-0.388171,0.824694, -0.387011,0.051553,-0.920632, -0.333584,-0.732911,-0.592926, -0.331901,0.036498,0.942608, -0.299539,-0.385062,-0.872928, -0.245677,0.868112,0.431306, -0.235768,-0.746778,0.621881, -0.172335,0.625585,-0.760884, -0.144772,0.43948,0.88651, -0.127762,0.902348,-0.411637, -0.119933,-0.991554,0.049356, -0.103121,0.994331,0.02596, -0.003241,-0.266976,0.963698, 0.003241,0.266978,-0.963697, 0.11053,0.735688,0.668243, 0.110728,-0.787329,-0.606508, 0.127763,-0.902347,0.411638, 0.144773,-0.439479,-0.886509, 0.172335,-0.625583,0.760885, 0.242772,-0.947178,-0.209555, 0.271977,0.571167,-0.774465, 0.29954,0.385063,0.872928, 0.31655,0.847931,-0.425218, 0.331901,-0.036497,-0.942608, 0.341191,0.939913,0.012379, 0.387011,-0.051552,0.920633, 0.473235,0.780063,0.409331, 0.490467,-0.857972,0.152726, 0.528066,-0.712229,-0.462467, 0.562111,-0.364379,-0.742468, 0.562587,-0.410159,0.717821, 0.600637,0.267692,-0.753376, 0.662244,0.429438,0.614017, 0.672757,0.715506,-0.188282, 0.749716,-0.007176,0.661722, 0.759203,-0.553783,0.341958, 0.775762,-0.623022,-0.100185, 0.804801,0.555656,0.208671, 0.830847,-0.06019,-0.553237, 0.848333,0.356899,-0.391094, 0.946332,-0.1508,0.285859, 0.96289,-0.22004,-0.156284, 0.980377,0.197049,0.005858
  ];

  let indicesOfFaces = [
    30,24,37, 14,28,26, 11,13,22, 25,38,31, 48,56,55, 59,57,58, 39,41,50, 43,49,54, 40,46,34, 45,36,32, 53,52,44, 51,42,47, 21,19,10, 27,15,16, 33,35,23, 29,20,17, 18,8,12, 1,3,7, 5,4,0, 6,9,2, 18,12,24,30, 24,26,39,37, 26,28,41,39, 11,22,28,14, 13,25,31,22, 31,38,49,43, 30,37,48,40, 56,59,58,55, 58,57,52,53, 50,54,59,56, 41,43,54,50, 49,38,42,51, 48,55,46,40, 46,45,32,34, 36,44,33,27, 53,44,36,45, 57,51,47,52, 47,42,29,35, 34,32,19,21, 19,16,5,10, 16,15,4,5, 33,23,15,27, 35,29,17,23 ,17,20,9,6, 21,10,8,18, 8,1,7,12, 7,3,11,14, 0,2,3,1, 4,6,2,0, 9,20,25,13, 12,7,14,26,24, 22,31,43,41,28, 37,39,50,56,48, 54,49,51,57,59, 55,58,53,45,46, 52,47,35,33,44, 32,36,27,16,19, 23,17,6,4,15, 10,5,0,1,8, 2,9,13,11,3, 18,30,40,34,21, 20,29,42,38,25
  ];

  geometry = new THREE.PolyhedronGeometry( verticesOfCube, indicesOfFaces, 6, 2 );
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