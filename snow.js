let WIDTH = windowWidth;
let HEIGHT = windowHeight;

function setup() {
    createCanvas(WIDTH, HEIGHT);
    background(51);

}

function draw() {
}

function snowflake() {
    var x = randInt(0, WIDTH);
    var y = 0;
    var vel = randVel

}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}