var myH;
var myS;
var myB;
var state = true;

function setup() {
    createCanvas(windowWidth,windowHeight);
    colorMode(HSB, width);	  	 
}

function draw() {
    if (state == true) {
        for(var x=-20; x<width; x += 40) {
            for(var y=-20; y<height; y += 40) {
                var myH = mouseX;
                var myS = mouseY;
                var myB = width;

                fill(myH,myS,myB);

                quad(x,y,x,y+30,x+30,y+30,x+30,y)
            }
        }
    }
}

function mousePressed() {
    if (state == true) {
        state=false;
    } else {
        state=true;
    }
}