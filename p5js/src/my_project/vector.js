// from: https://infosmith.biz/blog/it/p5js-vectorclass

var movers = new Array(1000);

function setup() {
    createCanvas(600, 600);
    background(0);
    for (var i = 0; i < movers.length; i++) {
        movers[i] = new Mover();
    }
}

function draw() {
    fill(0, 40);
    rect(0, 0, width, height);
    for (var i = 0; i < movers.length; i++) {
        movers[i].update();
        movers[i].checkEdges();
        movers[i].display();
    }
}

class Mover {
    constructor() {
        this.accelaration;
        this.location = createVector(random(width), random(height));
        this.velocity = createVector(0, 0);
        this.topspeed = 4.6;
    }

    update() {
        var mouse = createVector(mouseX, mouseY);
        var dir = p5.Vector.sub(mouse, this.location);
        var magn = p5.Vector.mag(dir);
        dir.normalize();
        dir.mult(13 / magn);
        this.accelaration = dir;
        this.velocity.add(this.accelaration);
        this.velocity.limit(this.topspeed);
        this.location.add(this.velocity);
    }

    display() {
        noStroke();
        fill(191, 207, 255);
        ellipse(this.location.x, this.location.y, 8, 8);
    }

    checkEdges() {
        if (this.location.x > width) {
            this.location.x = 0;
        } else if (this.location.x < 0) {
            this.location.x = width;
        }
        if (this.location.y > height) {
            this.location.y = 0;
        } else if (this.location.y < 0) {
            this.location.y = height;
        }
    }
}