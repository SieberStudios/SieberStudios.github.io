function setup() {
    let cnv = createCanvas(windowWidth,800);
    cnv.position();
  }
  
  function draw() {
    background(255);
    strokeWeight(5);
    fill(100);
    circle(width/2, height/2, 50);
  }