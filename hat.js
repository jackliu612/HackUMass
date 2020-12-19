function SantaHat(p, x1, y1, x2, y2){

    let width = x2 - x1;
    let height = y2 - y1;
    let x_offset = 0;
    let y_offset = 0;

    let img = p.loadImage('hat.png');


    this.draw = function () {
        p.image(img, x1-x_offset, y1-y_offset);
    }

    this.drawBox = function () {
        p.noFill();
        p.strokeWeight(10);
        p.rect(x1, y1, width, height);
    }

    this.resize = function () {
        img.resize(width*1.5, 0);
        x_offset = width*.1
        y_offset = height*.4;
    }
}

function ElfHat(p, x1, y1, x2, y2){

    let width = x2 - x1;
    let height = y2 - y1;
    let x_offset = 0;
    let y_offset = 0;

    let img = p.loadImage('elf.png');


    this.draw = function () {
        p.image(img, x1-x_offset, y1-y_offset);
    }

    this.drawBox = function () {
        p.noFill();
        p.strokeWeight(10);
        p.rect(x1, y1, width, height);
    }

    this.resize = function () {
        img.resize(width*1.5, 0);
        x_offset = width*.15
        y_offset = height*.9;
    }
}

function SantaBeard(p, x1, y1, x2, y2){

    let width = x2 - x1;
    let height = y2 - y1;
    let x_offset = 0;
    let y_offset = 0;

    let img = p.loadImage('beard.png');


    this.draw = function () {
        p.image(img, x1-x_offset, y1-y_offset);
    }

    this.drawBox = function () {
        p.noFill();
        p.strokeWeight(10);
        rect(x1, y1, width, height);
    }

    this.resize = function () {
        img.resize(width, 0);
        x_offset = 0
        y_offset = -height*.65;
    }
}