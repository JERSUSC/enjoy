var diamBlue = 10;
var rComa = (160);
var gComa = (165);
var bComa = (120);

function setup() {
    // put setup code here
    createCanvas(500, 500);
}

function draw() {
    // Code goes here  
    background("#ecc30b");
    //circles
    fill("#3891a6");
    noStroke();
    ellipse(50, 55, diamBlue, diamBlue);
    ellipse(450, 450, diamBlue, diamBlue);
    //squre
    stroke(rComa, bComa, gComa);
    strokeWeight(20);
    rect(250, 250, 40, 40);
    //circle Follow Mouse
    fill("#fcfcfc");
    strokeWeight(10);
    stroke("#f8f32b");
    ellipse(mouseX, mouseY, 25, 25);
    //triangles
    strokeWeight(0);
    fill("#ced3dc")
    stroke("#4c5b5c");
    triangle(10, 495, 50, 430, 90, 495);
    triangle(410, 80, 450, 10, 490, 80);



    //text top
    fill("#275dad");
    strokeWeight(0);
    textSize(20);
    textFont("Gerogia");
    textStyle(ITALIC);
    text("ENJOY!", 240, 80);
    //text bottom
    textSize(20);
    textFont("Georgia");
    textStyle(ITALIC);
    text("ENJOY!", 240, 490);
    //text left
    textSize(20);
    textFont("Georgia");
    textStyle(ITALIC);
    text("ENJOY!", 10, 260);
    //text right
    textSize(20);
    textFont("Georgia");
    textStyle(ITALIC);
    text("ENJOY!", 425, 260);

}


function mousePressed() {
    // Code goes here
    r = random(50, 255);
    g = random(50, 255);
    b = random(50, 255);

    //changeSizeCircles
    if (diamBlue >= 90) {
        diamBlue = 0;
    } else {
        diamBlue = diamBlue + 10;
    }
    diamBlue = diamBlue + 10;
    //LineChangeColor
    rComa = random(20, 155);
    gComa = random(15, 50);
    bComa = random(10, 110);
}
