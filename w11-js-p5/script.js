// Define a class for each water ripple
class Ripple {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.maxRadius = 50;
        this.opacity = 255;
        this.color = color(0, 224, 255, 50);
    }

    // Define a function to update the ripple's properties each frame
    update() {
        this.radius += 2;
        this.opacity -= 5;
    }

    // Define a function to draw the ripple on the canvas
    draw() {
        noFill();
        stroke(this.color);
        strokeWeight(3);
        ellipse(this.x, this.y, this.radius);
    }

    // Define a function to check if the ripple has faded away completely
    isFinished() {
        return this.opacity <= 0;
    }

    // Define a function to mix colors when two ripples overlap
    mixColors(other) {
        let mixedColor = lerpColor(this.color, other.color, 1);
        this.color = mixedColor;
        other.color = mixedColor;
    }
}

// Create an array to hold all the water ripples
let ripples = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0, 0, 0, 1);

    // Randomly generate a new water ripple every 30 frames
    if (frameCount % 30 === 0) {
        let x = random(width);
        let y = random(height);
        let newRipple = new Ripple(x, y);
        ripples.push(newRipple);
    }

    // Update and draw each water ripple
    for (let i = 0; i < ripples.length; i++) {
        ripples[i].update();
        ripples[i].draw();

        // If the ripple has faded away completely, remove it from the array
        if (ripples[i].isFinished()) {
            ripples.splice(i, 1);
            i--;
        } else {
            // Check for overlapping ripples and mix colors if necessary
            for (let j = i + 1; j < ripples.length; j++) {
                let distance = dist(ripples[i].x, ripples[i].y, ripples[j].x, ripples[j].y);
                if (distance <= ripples[i].radius + ripples[j].radius) {
                    ripples[i].mixColors(ripples[j]);
                }
            }
        }
    }
}

function mouseClicked() {
    // When the mouse is clicked, create a new water ripple at the mouse position
    let newRipple = new Ripple(mouseX, mouseY);
    ripples.push(newRipple);
}
