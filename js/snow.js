// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Snowfall
// Edited Video: https://youtu.be/cl-mHFCGzYk
let snw = function (p) {

    let snow = [];
    let gravity;

    let zOff = 0;

    let spritesheet;
    let textures = [];

    p.preload = function() {
        spritesheet = p.loadImage('img/flakes32.png');
    }

    p.setup = function() {
        p.createCanvas(p.windowWidth, p.windowHeight);
        gravity = p.createVector(0, 0.3);
        for (let x = 0; x < spritesheet.width; x += 32) {
            for (let y = 0; y < spritesheet.height; y += 32) {
                let img = spritesheet.get(x, y, 32, 32);
                p.image(img, x, y);
                textures.push(img);
            }
        }

        for (let i = 0; i < 400; i++) {
            let x = p.random(p.width);
            let y = p.random(p.height);
            let design = p.random(textures);
            snow.push(new Snowflake(x, y, design, p));
        }
    }

    p.draw = function() {
        p.background(52, 58, 64);

        zOff += 0.1;

        for (flake of snow) {
            let xOff = flake.pos.x / p.width;
            let yOff = flake.pos.y / p.height;
            let wAngle = p.noise(xOff, yOff, zOff) * p.TWO_PI;
            let wind = p5.Vector.fromAngle(wAngle);
            wind.mult(0.1);

            flake.applyForce(gravity);
            flake.applyForce(wind);
            flake.update();
            flake.render();
        }
    }
}

let mySnow = new p5(snw, 'cover')