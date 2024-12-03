
let canvas; 

function setup() {
   canvas = createCanvas(windowWidth,windowHeight);
   canvas.position(0,0);
   canvas.style("z-index",-2)
    //background(225);

  }
  function windowResized(){
resizedCanvas(windowWidth,windowHeight)

  }

function draw(){

}

function mouseMoved(){
  strokeWeight(0);
  fill(random (0,128,0),random (0,0),random (0,0));
    ellipse (mouseX,mouseY,550,550);

}
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 4,8 );
//const material = new THREE.MeshBasicMaterial( { color: 0x000ff } );
//const geometry = new THREE.CapsuleGeometry( 1, 2, 3, 9 );
 

const texture = new THREE.TextureLoader().load('textures/emerald.png');

const material = new THREE.MeshBasicMaterial( { map:texture } );

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
}