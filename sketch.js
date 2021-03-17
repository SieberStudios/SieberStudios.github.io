let img;

function preload(){
    img = loadImage('images/Portfolio/Portfolio12.png');
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    textSize(32);
    textAlign(CENTER, CENTER);
}

function draw() {
    //background(0);
    fill(255);
    text("Hello World!", 200, 100);
    imageMode(CENTER);
    image(img, width/2,height/2);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

// https://p5js.org/reference/#/p5/createVideo