function init() {

    var box = getBox(1,1,1);
    var plane = getPlane(4);

    plane.rotation.x = Math.PI/2;
    box.position.y = box.geometry.parameters.height/2;

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth/window.innerHeight,
        1,
        1000
    );
    scene.add(box);
    scene.add(plane);

    camera.position.z = 6;
    camera.position.x = 2;
    camera.position.y = 1;
    camera.lookAt(new THREE.Vector3(0,0,0));

    var renderer = new THREE.WebGL1Renderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('webgl').appendChild(renderer.domElement);

    renderer.render(
        scene,
        camera
    );


};

function getBox(w, h, d) {

    var geo = new THREE.BoxGeometry(w,h,d);
    var material = new THREE.MeshBasicMaterial({
        color: 0x00ff00
    });

    var mesh = new THREE.Mesh(
        geo,
        material
    );

    return mesh;
}

function getPlane(size) {
    var geo = new THREE.PlaneGeometry(size,size);
    var material = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        side: THREE.DoubleSide
    });

    var mesh = new THREE.Mesh(
        geo,
        material
    );

    return mesh;
}

init()