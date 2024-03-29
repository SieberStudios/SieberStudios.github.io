let vid;

var c1, c2;

function setup() {
    createCanvas(windowWidth, windowHeight - 250);

    c2 = color(52,124,44);
    c1 = color(0);
    setGradient(c1,c2);

    var mp4 = 'videos/DeeperDungeon.mp4';
    var wmv = 'videos/DeeperDungeon.wmv'

    vid = createVideo([mp4, wmv]);
    vid.hide();
    fill(255);
    textSize(30);
}

function draw(){
    textAlign(CENTER, CENTER);
    text('Click me to play video', width / 2, height / 2);
    imageMode(CENTER);
    image(vid, width/2, height/2, 1280, 720);
    
    if(mouseIsPressed && mouseY >= 100){
        vidLoad();
    }
}