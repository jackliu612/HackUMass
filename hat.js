function SantaHat(x1, y1, x2, y2){

    let width = x2 - x1;
    let height = y2 - y1;
    let x_offset = 0;
    let y_offset = 0;

    let img = loadImage('hat.png');


    this.draw = function () {
        image(img, x1-x_offset, y1-y_offset);
    }

    this.drawBox = function () {
        noFill();
        strokeWeight(10);
        rect(x1, y1, width, height);
    }

    this.resize = function () {
        img.resize(width*1.5, 0);
        x_offset = width*.1
        y_offset = height*.25;
    }
}

function ElfHat(x1, y1, x2, y2){

    let width = x2 - x1;
    let height = y2 - y1;
    let x_offset = 0;
    let y_offset = 0;

    let img = loadImage('elf.png');


    this.draw = function () {
        image(img, x1-x_offset, y1-y_offset);
    }

    this.drawBox = function () {
        noFill();
        strokeWeight(10);
        rect(x1, y1, width, height);
    }

    this.resize = function () {
        img.resize(width*1.5, 0);
        x_offset = width*.15
        y_offset = height*.9;
    }
}

function SantaBeard(x1, y1, x2, y2){

    let width = x2 - x1;
    let height = y2 - y1;
    let x_offset = 0;
    let y_offset = 0;

    let img = loadImage('beard.png');


    this.draw = function () {
        image(img, x1-x_offset, y1-y_offset);
    }

    this.drawBox = function () {
        noFill();
        strokeWeight(10);
        rect(x1, y1, width, height);
    }

    this.resize = function () {
        img.resize(width, 0);
        x_offset = 0
        y_offset = -height*.65;
    }
}