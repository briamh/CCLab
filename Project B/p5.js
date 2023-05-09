let score = 0;
let ball;
let speedY = 2;
let speedX = 2;
let firsttime = true;
let secondtime = true;
let thirdtime = true;
let angle = 0;
let showLevel2 = false;
let showLevel3 = false;
let showLevelB = false

function setup() {
    let canvas = createCanvas(500, 500);
    canvas.parent("myContainer")
    ball = loadImage("ball.png");
    splash = loadSound('splash.wav');
    resetBall();
}

function draw() {
    background(128, 0, 32);
    stroke(32, 1, 34)
    strokeWeight(5);
    fill(128, 0, 32)
    rectMode(CENTER);
    let space = 30;
    for (x = 0; x < width + 50; x += space) {
        for (y = 0; y < height + 50; y += space) {
            // line(x,y,x+space,y); 
            line(x, y, x, y + space);
            square(x, y, 10)
            square(x + space / 2, y + space / 2, 15)
        }
    }
    fill(250);
    ellipse(23, 32, 120, 90)
    fill(2)
    textSize(50);
    text(score, 8, 50);
    bounce();
    push();
    translate(ballX + 50, ballY + 50);
    rotate(angle);
    image(ball, -50, -50, 100, 100);
    pop();
    ballX += speedX;
    ballY += speedY;
    rectMode(CENTER)
    speeder();
    if (showLevel2) {
        textSize(70);
        fill(128, 0, 32, 90)
        rect(260, 230, 300, 100)
        fill(25);
        text("Level 2", width / 2 - 100, height / 2);
    }
    if (showLevel3) {
        textSize(70);
        fill(128, 0, 32, 90)
        rect(260, 230, 300, 100)
        fill(25)
        text("Level 3", width / 2 - 100, height / 2);
    }
    if (showLevelB) {
        textSize(70);
        fill(128, 0, 32, 90)
        rect(260, 230, 400, 100)
        fill(240)
        text("Keep Ballin", width / 2 - 170, height / 2);
    }
}

function mouseClicked() {
    let d = dist(mouseX, mouseY, ballX + 50, ballY + 50);
    if (d <= 50) {
        splash.play();
        score++;
        resetBall();

        if (score == 3) {
            showLevel2 = true;
            setTimeout(function () { showLevel2 = false; }, 2000);
        }
        if (score == 5) {
            showLevel3 = true;
            setTimeout(function () { showLevel3 = false; }, 2000);
        }
        if (score == 7) {
            showLevelB = true;
            setTimeout(function () { showLevelB = false; }, 2000);
        }
    }
}

function bounce() {
    if (ballY > height - 100 || ballY < 0) {
        speedY *= -1
    }
    if (ballX > width - 100 || ballX < 0) {
        speedX *= -1;
    }
}

function speeder() {
    if (score >= 2 && firsttime == true) {
        speedX = 4;
        speedY = 4;
        firsttime = false;
    }
    if (score >= 5 && secondtime == true) {
        speedX = 8;
        speedY = 8;
        angle += 10.5;
        secondtime = false;
    }
    if (score >= 0) {
        angle += 0.1;
    }
    if (score >= 3) {
        angle += 0.15;
        filter(INVERT, 1)
    }
    if (score >= 5) {
        angle += 0.2;
        filter(GRAY, 2);
    }
    if (score >= 7) {
        angle += 0.3;
        filter(INVERT);
    }

}

function resetBall() {
    ballX = random(0, width - 100);
    ballY = random(0, height - 100);
}
