// Some global variables
/** 
* Max dimension that the width of the output can be
* @type {int} 
*/
let MAX_WIDTH;

/** 
* Max dimension that the height of the output can be
* @type {int} 
*/
let MAX_HEIGHT;
/** 
*Width of the canvas
*@type {int} */
let WIDTH;
/** 
* Height of the canvas
* @type {int} 
*/
let HEIGHT;

/**
 * Function for the p5.js sketch object.
 * This contains the p5.js functions preload, setup, draw
 * This will create a canvas on the page attached to a specific
 * div container based on the div id attribute
 *  @namespace sketch
 *  @param p {p5} p5.js instance
 */

let sketch = function (p) {
    MAX_WIDTH = p.windowWidth * .65;
    MAX_HEIGHT = p.windowHeight * .7;
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
        let santaHat = document.getElementById('santaHat').checked;
        let elfHat = document.getElementById('elfHat').checked;
        let santaBeard = document.getElementById('santaBeard').checked;
        let topHat = document.getElementById('topHat').checked;
        let mask = document.getElementById('mask').checked;
        if (santaHat) {
            console.log("santa hat");
            createHats(faceCoordinates, SantaHat);
        }
        if (elfHat) {
            console.log("elf hat");
            createHats(faceCoordinates, ElfHat);
        }
        if (santaBeard) {
            console.log("santa beard");
            createHats(faceCoordinates, SantaBeard);
        }
        if (topHat) {
            console.log("top hat");
            createHats(faceCoordinates, TopHat);
        }
        if (mask) {
            console.log("face mask");
            createHats(faceCoordinates, Mask);
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
     * @see setDims
     * @function createCnvs
     * @memberof sketch
     */
    function createCnvs() {
        setDims();
        let cnv = p.createCanvas(WIDTH, HEIGHT);
        cnv.id('holiday');
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
        if (imgElement.width / MAX_WIDTH > imgElement.height / MAX_HEIGHT) {
            // fix width to 1000 and height to maintain aspect ratio
            WIDTH = MAX_WIDTH;
            HEIGHT = WIDTH * imgElement.height / imgElement.width;
        } else {
            HEIGHT = MAX_HEIGHT;
            WIDTH = HEIGHT * imgElement.width / imgElement.height;
        }
    }

    /**
     * Creates a hat object instance for each of the detected faces.
     * @param {Array.<Array.<int>>} faces nx4 array that contains the bounding box for each of the n faces detected
     * @param cls {SantaHat|ElfHat|SantaBeard} The accessory class that is being added
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
     * @param {p5.Graphics} surf Surface onto which the hats are drawn on (typically a offscreen buffer)
     * @function drawHats
     * @memberof sketch
     */
    function drawHats(surf) {
        hats.forEach(hat => {
            hat.draw(surf);
        })
    }

}