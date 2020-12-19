let WIDTH = 1000;
let HEIGHT = 1000;

let POINT_1_X = 320;
let POINT_1_Y = 130;

let POINT_2_X = 550;
let POINT_2_Y = 440;

let temp;
let temp2;



function preload() {
    //jack = loadImage('me.jpg');
    temp = new SantaHat(POINT_1_X, POINT_1_Y, POINT_2_X, POINT_2_Y);
    temp2 = new SantaBeard(POINT_1_X, POINT_1_Y, POINT_2_X, POINT_2_Y);
}

function setup() {
    createCanvas(WIDTH, HEIGHT);
    image(jack, 0, 0);

    temp.resize();
    temp2.resize();

}

function draw() {
    temp.drawBox();
    temp.draw();
    temp2.draw();
}

function createHats(faces) {
    let hats = [];

    faces.forEach(face => {
        hats.push(face[0], face[1], face[2], face[3])
    })

    return hats
}