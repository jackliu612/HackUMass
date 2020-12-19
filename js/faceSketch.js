

// Some global variables
/** Max dimension that the height or width of the output can be */
let MAX_SIZE = 500;
/** Width of the canvas*/
let WIDTH;
/** Height of the canvas*/
let HEIGHT;

/**
 * Function for the p5.js sketch object.
 * This contains the p5.js functions preload, setup, draw
 * This will create a canvas on the page attached to a specific
 * div container based on the div id attribute
 *  @namespace sketch
 *  @param p {p5.js instance}
 */

let sketch = function (p) {

    // Holds all of the hats for each deteched face
    let hats = [];
    // This is the base image
    let img;
    // This is the offscreen buffer that everything is drawn to first
    // This allows for ease of scaling later on
    let buff;

    /**
     * preload is run before anything else and all other methods
     * will wait until it is completed before being called
     * This is used to load all necessary assets so that they are
     * available to use later on and avoiding any async issues
     * @memberof sketch
     * @function preload
     */

    p.preload = function () {
        img = p.loadImage(imgElement.src);
        let selection = document.getElementById('hats').value;
        switch (selection){
            case "santaHat":
                console.log("santa hat");
                createHats(faceCoordinates, SantaHat);
                break;
            case "elfHat":
                console.log("elf hat");
                createHats(faceCoordinates, ElfHat);
                break;
            case "santaBeard":
                console.log("santa beard");
                createHats(faceCoordinates, SantaBeard);
                break;
            default:
                console.log(selection);
        }
    }

    /**
     * This is run after preload and does all the one time setup
     * required. Specifically, it will resize the hats appropriately,
     * Draw everything to the buffer, and finally draw the buffer to the canvas
     * @function setup
     * @memberof sketch
     */
    p.setup = function () {
        resizeHats();
        createBuffer();
        createCnvs();
    }

    /**
     * This is the draw function that is called every frame
     * Currently unused
     * @function draw
     * @memberof sketch
     */
    p.draw = function () {

    }

    /**
     * Helper method to create and populate the offscreen buffer.
     * The buffer is the exact size of the input image
     * @function createBuffer
     * @memberof sketch
     */
    function createBuffer() {
        buff = p.createGraphics(imgElement.width, imgElement.height);
        buff.image(img, 0, 0);
        drawHats(buff);
    }

    /**
     * Helper method to create the HTML canvas and apply the buffer.
     * The canvas is resized so that the larger of width and heigh does not
     * exceed the MAX_SIZE (see setDims)
     * @function createCnvs
     * @memberof sketch
     */
    function createCnvs() {
        setDims();
        p.createCanvas(WIDTH, HEIGHT);
        p.image(buff, 0, 0, WIDTH, HEIGHT);
    }

    /**
     * Helper method to set the WIDTH and HEIGHT global variables
     * Sets the larger of two values to the MAX_SIZE and then scales
     * the other to maintain correct aspect ratio
     * @function setDims
     * @memberof sketch
     */
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

    /**
     * Creates a hat object instance for each of the detected faces.
     * @param {array} faces nx4 array that contains the bounding box for each of the n faces detected
     * @function createHats
     * @memberof sketch
     */
    function createHats(faces, cls) {
        faces.forEach(face => {
            hats.push(new cls(p, face[0], face[1], face[2], face[3]));
            hats.push(new cls(p, face[0], face[1], face[2], face[3]));
        })

    }

    /**
     * Resizes each of the hats so that they are positioned correctly relative to
     * the size and position of each face
     * @function resizeHats
     * @memberof sketch
     */
    function resizeHats() {
        hats.forEach(hat => {
            hat.resize();
        })
    }

    /**
     * Draws each of the hats onto the given surface
     * @param {surf} Surface onto which the hats are drawn on (typically a offscreen buffer)
     * @function drawHats
     * @memberof sketch
     */
    function drawHats(surf) {
        hats.forEach(hat => {
            hat.draw(surf);
        })
    }

}