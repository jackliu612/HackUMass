let MAX_SIZE = 500;
let WIDTH;
let HEIGHT;

let sketch = function (p) {

    let hats = [];
    let img;
    let buff;

    p.preload = function () {
        img = p.loadImage(imgElement.src);
        createHats(faceCoordinates);
    }

    p.setup = function () {
        resizeHats();
        createBuffer();
        createCnvs();
    }

    p.draw = function () {

    }

    function createBuffer() {
        buff = p.createGraphics(imgElement.width, imgElement.height);
        buff.image(img, 0, 0);
        drawHats(buff);
    }

    function createCnvs() {
        setDims();
        p.createCanvas(WIDTH, HEIGHT);
        p.image(buff, 0, 0, WIDTH, HEIGHT);
    }

    function setDims() {
        if (imgElement.width > imgElement.height) {
            // fix width to 1000 and height to maintain aspect ratio
            WIDTH = MAX_SIZE;
            HEIGHT = WIDTH*imgElement.height/imgElement.width;
        } else {
            HEIGHT = MAX_SIZE;
            WIDTH = HEIGHT*imgElement.width/imgElement.height;
        }
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

    function drawHats(surf) {
        hats.forEach(hat => {
            hat.draw(surf);
        })
    }

    function newImage() {

    }
}