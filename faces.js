let WIDTH;
let HEIGHT;

let POINT_1_X = 320;
let POINT_1_Y = 130;

let POINT_2_X = 550;
let POINT_2_Y = 440;

let temp;
let temp2;


let sketch = function (p) {

    let hats = [];

    p.preload = function() {
        jack = p.loadImage(imgElement.src);
        WIDTH = imgElement.width;
        HEIGHT = imgElement.height;
        // temp = new SantaHat(p, POINT_1_X, POINT_1_Y, POINT_2_X, POINT_2_Y);
        // temp2 = new SantaBeard(p, POINT_1_X, POINT_1_Y, POINT_2_X, POINT_2_Y);
        createHats(faceCoordinates);
    }

    p.setup = function() {
        p.createCanvas(WIDTH, HEIGHT);
        p.image(jack, 0, 0);
        resizeHats();
        // temp.resize();
        // temp2.resize();

    }

    p.draw = function() {
        drawHats();
    }

    function createHats(faces) {
        faces.forEach(face => {
            hats.push(new SantaHat(p, face[0], face[1], face[2], face[3]));
            hats.push(new SantaBeard(p, face[0], face[1], face[2], face[3]));
        })

    }

    function resizeHats() {
        hats.forEach(hat => {
            hat.resize();
        })
    }

    function drawHats() {
        hats.forEach(hat => {
            hat.draw();
        })
    }
}