import * as THREE from 'three';
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';


let sceneContainer = document.querySelector("#emeraldgem-canvas");
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, sceneContainer.clientWidth / sceneContainer.clientHeight, 0.1, 1000);
camera.position.z = 2;
const renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});

renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);

renderer.render(scene, camera);
renderer.setAnimationLoop( animate );
sceneContainer.appendChild( renderer.domElement );

const controls = new OrbitControls(camera, renderer.domElement);

const geometry = new THREE.BoxGeometry( 1, 1, 4,8 );

 

const texture = new THREE.TextureLoader().load('textures/emeraldgem.png');

const material = new THREE.MeshBasicMaterial( { map:texture } );

const cube = new THREE.Mesh( geometry, material );
cube.position.z = -3;
scene.add( cube );


function animate() {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = sceneContainer.clientWidth / sceneContainer.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
}

window.addEventListener('resize', onWindowResize, false);