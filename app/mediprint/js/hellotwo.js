// Inset window with axes showing world orientation
// Useful with Trackball controls when zooming
// WestLangley

// three.js r.69

var container,
    container2,
    camera,
    scene,
    renderer,
    axes,
    camera2,
    scene2,
    renderer2,
    axes2,
    cube,
    CANVAS_WIDTH = 200,
    CANVAS_HEIGHT = 200,
    CAM_DISTANCE = 300;

init();
animate();

// main canvas
// -----------------------------------------------


function init() {

    // dom
    container = document.getElementById( 'container' );

    // renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor( 0xffffff, 1 );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );

    // scene
    scene = new THREE.Scene();

    // camera
    camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.y = 150;
    camera.position.z = 500;

    // controlls
    controls = new THREE.TrackballControls( camera, renderer.domElement );

    // cube
    cube = new THREE.Mesh(
            new THREE.BoxGeometry( 200, 200, 200, 1, 1, 1 ),
            new THREE.MeshBasicMaterial( { color : 0xff0000, wireframe: true }
                ) );
    scene.add( cube );

    // axes
    axes = new THREE.AxisHelper( 100 );
    scene.add( axes );

    // inset canvas
    // -----------------------------------------------

    // dom
    container2 = document.getElementById('inset');

    // renderer
    renderer2 = new THREE.WebGLRenderer();
    renderer2.setClearColor( 0xf0f0f0, 1 );
    renderer2.setSize( CANVAS_WIDTH, CANVAS_HEIGHT );
    container2.appendChild( renderer2.domElement );

    // scene
    scene2 = new THREE.Scene();

    // camera
    camera2 = new THREE.PerspectiveCamera( 50, CANVAS_WIDTH / CANVAS_HEIGHT, 1, 1000 );
    camera2.up = camera.up; // important!

    // axes
    axes2 = new THREE.AxisHelper( 100 );
    scene2.add( axes2 );
}

// animate
// -----------------------------------------------

function render() {

    renderer.render( scene, camera );
    renderer2.render( scene2, camera2 );

}

function animate() {

    requestAnimationFrame( animate );

    controls.update();

	camera2.position.copy( camera.position );
	camera2.position.sub( controls.target ); // added by @libe
	camera2.position.setLength( CAM_DISTANCE );

    camera2.lookAt( scene2.position );
    render();

}


