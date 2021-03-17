let img;

function preload(){
    img = loadImage('images/Portfolio/Portfolio12.png');
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    fill(255);
    textSize(32);
    textAlign(CENTER,CENTER);
    text("Hello World", 200, 100);
}

function draw() {
    //background(0);
    imageMode(CENTER);
    image(img, width/2,height/2);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

// https://p5js.org/reference/#/p5/createVideo