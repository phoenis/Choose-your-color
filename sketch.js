var myH;
var myS;
var myB;
var state = true;

function setup() {
    createCanvas(800,600);
    colorMode(HSB, width);	
}

function draw() {
    
    if (state == true) {
    background(0,0,width);
        for(var x=-20; x<width; x += 40) {
            for(var y=-20; y<height; y += 40) {
                var myH = mouseX;
                var myS = mouseY;
                var myB = width;

                fill(myH,myS,myB);

                quad(x,y,x,y+30,x+30,y+30,x+30,y)
                
                
            }
        }
    push();
    fill(myH,myS,myB,width*0.9);
    rect(278, 520, 243, 45);
    fill(0,0,width);
    textSize(20);
    textAlign(CENTER);
    text('Click to select the color!', 400, 550);
    pop();
    } else {
    background(0,0,width);
        for(var x=-20; x<width; x += 40) {
            for(var y=-20; y<height; y += 40) {

                fill(myH,myS,myB);

                quad(x,y,x,y+30,x+30,y+30,x+30,y)
                
                
            }
        }
    push();
    fill(myH,myS,myB,width*0.9);
    rect(275, 520, 250, 45);
    fill(0,0,width);
    textSize(20);
    textAlign(CENTER);
    text('Click to change the color!', 400, 550);
    pop();
    }
    
}

function mousePressed() {
    if (state == true) {
        state=false;
    } else {
        state=true;
    }
}