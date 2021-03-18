let vid;

function setup() {
    createCanvas(windowWidth, windowHeight);

    vid = createVideo(['videos/ScenicSprintVid.mp4', 'ScenicSprintVid.wmv']);
    vid.hide();
    fill(255);
    textSize(30);
}

function draw(){
    background(0);
    text('Click me to play video', 750, 400);
    image(vid, 300, 100, 1280, 720);
}

function mousePressed(){
    vidLoad();
}

function vidLoad(){
    vid.loop();
    vid.volume(0);
}

function windowResized(){
    window.location.reload();
    resizeCanvas(windowWidth, windowHeight);
    vidLoad();
}