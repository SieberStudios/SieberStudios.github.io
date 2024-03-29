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