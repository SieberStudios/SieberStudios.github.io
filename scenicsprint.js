let vid;

var c1, c2;

function setup() {
    createCanvas(windowWidth, windowHeight);

    c2 = color(52,124,44);
    c1 = color(0);
    setGradient(c1,c2);

    var mp4 = 'videos/ScenicSprintVid.mp4';
    var wmv = 'videos/ScenicSprintVid.wmv'

    vid = createVideo([mp4, wmv]);
    vid.hide();
    fill(255);
    textSize(30);
}

function draw(){
    text('Click me to play video', 750, 400);
    image(vid, 300, 100, 1280, 720);

    if(mouseIsPressed && mouseY >= 100){
        vidLoad();
    }
}

function vidLoad(){
    vid.loop();
    vid.volume(0);
}

function setGradient(c1, c2){
    noFill();
    for(var i = 0; i < height; i++){
        var inter = map(i, 0, height, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(0,i,width,i);
    }
}

function windowResized(){
    window.location.reload();
    resizeCanvas(windowWidth, windowHeight);
    vidLoad();
}