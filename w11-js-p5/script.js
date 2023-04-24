// CCLab Mini Project - 7.R Particles Template
let ripples = [];

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.id("p5-canvas")
    cnv.parent("p5-container")
}

function draw() {
    background(14, 135, 204, 10);

    let clock = random(5500);
    if (clock <= 500) {
        let x = random(width);
        let y = random(height);
        let newRipple = new Ripple(x, y);
        ripples.push(newRipple);
    }

    // Update
    for (let i = 0; i < ripples.length; i++) {
        ripples[i].update();
        ripples[i].display();

        // fade ripple
        if (ripples[i].whenDone()) {
            ripples.splice(i, 1);

        }
    }
}
function mouseClicked() {
    ripples.push(new Ripple(mouseX, mouseY));
}
//

class Ripple {
    // constructor function
    constructor(x, y) {
        // properties
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.maxRadius = 80;
        this.fade = 255;

    }

    // methods (functions)

    update() {
        this.radius += random(2, 5);
        this.fade -= 5;
    }

    display() {
        // particle's appearance
        noFill();
        stroke(255, 255, 255, this.fade);
        strokeWeight(3);
        ellipse(this.x, this.y, this.radius);
    }
    // Implement (at least three) more methods(functions) for the particle's behaviors, for example:

    whenDone() {
        return this.fade == 0;
    }
}

