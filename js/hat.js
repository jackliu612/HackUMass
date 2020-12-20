/**
* Used to draw the hats and beards onto faces, given the bounding box and a p5.graphics object
* @namespace hat
*/


/**
 * Represents a Santa Hat image that can be drawn to a surface
 * @param p {p5} p5.js instance
 * @param x1 {int} x-coordinate of the bounding box's top left corner
 * @param y1 {int} y-coordinate of the bounding box's top left corner
 * @param x2 {int} x-coordinate of the bounding box's bottom right corner
 * @param y2 {int} y-coordinate of the bounding box's bottom right corner
 * @constructor
 * @memberof hat
 */
function SantaHat(p, x1, y1, x2, y2) {

    // Width of the bounding box
    let width = x2 - x1;
    // Height of the bounding box
    let height = y2 - y1;
    // x offset for the image
    let x_offset = 0;
    // y offset for the image
    let y_offset = 0;

    // Image asset loaded on creation
    let img = p.loadImage('img/hat.png');


    /**
     * Method to draw the hat on a given surface
     * @param surf {p5.Graphics} Surface to draw on. Must be a p5.Graphics object.
     */
    this.draw = function (surf) {
        surf.image(img, x1 - x_offset, y1 - y_offset);
    }

    /**
     * Method to draw the bounding box for debugging purposes
     * @param surf {p5.Graphics} Surface to draw on. Must be a p5.Graphics object.
     */
    this.drawBox = function (surf) {
        surf.noFill();
        surf.strokeWeight(10);
        surf.rect(x1, y1, width, height);
    }

    /**
     * Resizing function that is run after the image is loaded to
     * fit the bounding box appropriately
     * Also sets the offsets for x and y so it is positioned correctly
     */
    this.resize = function () {
        img.resize(width * 1.5, 0);
        x_offset = width * .1
        y_offset = height * .4;
    }
}

/**
 * Represents a ELf Hat image that can be drawn to a surface
 * @see SantaHat
 * @param p p5.js instance
 * @param x1 {int} x-coordinate of the bounding box's top left corner
 * @param y1 {int} y-coordinate of the bounding box's top left corner
 * @param x2 {int} x-coordinate of the bounding box's bottom right corner
 * @param y2 {int} y-coordinate of the bounding box's bottom right corner
 * @constructor
 * @memberof hat
 */
function ElfHat(p, x1, y1, x2, y2) {

    let width = x2 - x1;
    let height = y2 - y1;
    let x_offset = 0;
    let y_offset = 0;

    let img = p.loadImage('img/elf.png');

    /**
     * Method to draw the hat on a given surface
     * @param surf {p5.Graphics} Surface to draw on. Must be a p5.Graphics object.
     */
    this.draw = function (surf) {
        surf.image(img, x1 - x_offset, y1 - y_offset);
    }

    /**
     * Method to draw the bounding box for debugging purposes
     * @param surf {p5.Graphics} Surface to draw on. Must be a p5.Graphics object.
     */
    this.drawBox = function (surf) {
        surf.noFill();
        surf.strokeWeight(10);
        surf.rect(x1, y1, width, height);
    }

    /**
     * Resizing function that is run after the image is loaded to
     * fit the bounding box appropriately
     * Also sets the offsets for x and y so it is positioned correctly
     */
    this.resize = function () {
        img.resize(width * 1.5, 0);
        x_offset = width * .15
        y_offset = height * 1.4;
    }
}

/**
 * Represents a Santa Beard image that can be drawn to a surface
 * @see SantaHat
 * @param p p5.js instance
 * @param x1 {int} x-coordinate of the bounding box's top left corner
 * @param y1 {int} y-coordinate of the bounding box's top left corner
 * @param x2 {int} x-coordinate of the bounding box's bottom right corner
 * @param y2 {int} y-coordinate of the bounding box's bottom right corner
 * @constructor
 * @memberof hat
 */

function SantaBeard(p, x1, y1, x2, y2) {

    let width = x2 - x1;
    let height = y2 - y1;
    let x_offset = 0;
    let y_offset = 0;

    let img = p.loadImage('img/beard.png');

    /**
     * Method to draw the hat on a given surface
     * @param surf {p5.Graphics} Surface to draw on. Must be a p5.Graphics object.
     */
    this.draw = function (surf) {
        surf.image(img, x1 - x_offset, y1 - y_offset);
    }

    /**
     * Method to draw the bounding box for debugging purposes
     * @param surf {p5.Graphics} Surface to draw on. Must be a p5.Graphics object.
     */
    this.drawBox = function (surf) {
        surf.noFill();
        surf.strokeWeight(10);
        surf.rect(x1, y1, width, height);
    }

    /**
     * Resizing function that is run after the image is loaded to
     * fit the bounding box appropriately
     * Also sets the offsets for x and y so it is positioned correctly
     */
    this.resize = function () {
        img.resize(width, 0);
        x_offset = 0
        y_offset = -height * .65;
    }
}