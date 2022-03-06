img="";
function preload(){
    img=loadImage("TVlamp.png");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(img,0,0, 640,420);
    text("Light Lamp", 215, 180);
    text("TV", 17,25);
    text("Switch Board",435,70);
    noFill();
    stroke("gold");
    rect(210,170,150,250);
    rect(5,10,350,320);
    rect(430,60,100,75);
}  